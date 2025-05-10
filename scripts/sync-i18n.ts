const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const baseLang = "en";
const targetLangs = ["fr"];
const fileDir = path.join(process.cwd(), "messages");

const useEnglishFallback = true;

function deepSync(base: Record<string, any>, target: Record<string, any>) {
  let updated = false;

  // First, loop through all keys in the base object (en.json)
  for (const key in base) {
    const baseVal = base[key];

    if (
      typeof baseVal === "object" &&
      baseVal !== null &&
      !Array.isArray(baseVal)
    ) {
      // If the base value is an object, we need to ensure the target has the same structure
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {}; // Create an empty object if it's missing in the target
        updated = true;
      }
      const innerUpdated = deepSync(baseVal, target[key]); // Recursively sync nested objects
      if (innerUpdated) updated = true;
    } else {
      // If the base value is a primitive (string, number, etc.)
      if (!(key in target)) {
        target[key] = useEnglishFallback ? baseVal : ""; // Add the key to target if it's missing
        updated = true;
      }
    }
  }

  // Now, we need to remove keys from the target that are not in the base object
  for (const key in target) {
    if (!(key in base)) {
      delete target[key]; // Remove keys that exist in target but not in base
      updated = true;
    }
  }

  return updated;
}

function parseJsonFile(filePath: string) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");

    // Handle the case of empty files
    if (data.trim() === "") {
      console.warn(`⚠️ ${filePath} is empty! Returning empty object.`);
      return {}; // Return empty object for empty files
    }

    return JSON.parse(data);
  } catch (err) {
    console.error(`⚠️ Error parsing ${filePath}:`, err);
    return {}; // Return an empty object in case of any parsing error
  }
}

// Debounce to prevent too many triggers while editing
let timeout: NodeJS.Timeout | null = null;

function syncTranslations() {
  const baseFile = path.join(fileDir, `${baseLang}.json`);
  const baseData = parseJsonFile(baseFile); // Parsing base file safely

  targetLangs.forEach((lang) => {
    const langFile = path.join(fileDir, `${lang}.json`);
    let langData = parseJsonFile(langFile); // Parsing target language file safely

    const updated = deepSync(baseData, langData);

    if (updated) {
      fs.writeFileSync(langFile, JSON.stringify(langData, null, 2));
      console.log(`✅ ${lang}.json mis à jour`);
    } else {
      console.log(`👌 ${lang}.json déjà à jour`);
    }
  });
}

// Add a debounce mechanism to prevent too many triggers while editing
const fileToWatch = path.join(fileDir, `${baseLang}.json`);

console.log(`👀 Watch lancé sur ${fileToWatch}...`);

chokidar.watch(fileToWatch).on("change", () => {
  if (timeout) clearTimeout(timeout); // Clear any existing timeout
  timeout = setTimeout(() => {
    console.log("✏️ Modification détectée, synchronisation en cours...");
    syncTranslations();
  }, 5000); // Delay to ensure file is saved (5 second)
});
