"use client"

import React, { useState, useEffect, useRef } from "react"
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  X,
  ArrowUpDown,
  Clock,
  ItalicIcon as AlphabetLatin,
  BookIcon
} from "lucide-react"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { useTranslations } from "next-intl"

// Type for a dictionary entry
interface DictionaryEntry {
  id: string
  word: string
  translation: string
  notes: string
  createdAt: number
  type: "word" | "expression" | "sentence"
}

export function DictionaryModal(): React.ReactElement {
  const t = useTranslations("DictonnaryModal")
  // State for dictionary entries
  const [entries, setEntries] = useState<DictionaryEntry[]>([])
  const [filteredEntries, setFilteredEntries] = useState<DictionaryEntry[]>([])

  // State for add/edit form
  const [newWord, setNewWord] = useState<string>("")
  const [newTranslation, setNewTranslation] = useState<string>("")
  const [newNotes, setNewNotes] = useState<string>("")
  const [newType, setNewType] = useState<"word" | "expression" | "sentence">("word")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState<boolean>(false)

  // State for search and sort
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [sortOrder, setSortOrder] = useState<"alphabetical" | "recent" | "oldest">("recent")

  // Reference for search debounce
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)
  const [open, setOpen] = useState(false)

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  // Load entries from localStorage on load
  useEffect(() => {
    const savedEntries = localStorage.getItem("dictionaryEntries")
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries))
      } catch (e) {
        console.error("Error loading dictionary entries:", e)
        setEntries([])
      }
    } else {
      // Add some examples if no entries exist
      const exampleEntries: DictionaryEntry[] = [
        {
          id: "1",
          word: "Bongiornu",
          translation: "Good morning",
          notes: "Common greeting used in the morning",
          createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
          type: "word",
        },
        {
          id: "2",
          word: "Comu siti?",
          translation: "How are you?",
          notes: "Formal way to ask someone how they are",
          createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
          type: "expression",
        },
        {
          id: "3",
          word: "Iu sugnu di Catania",
          translation: "I am from Catania",
          notes: "Useful sentence when introducing yourself",
          createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
          type: "sentence",
        },
      ]
      setEntries(exampleEntries)
      localStorage.setItem("dictionaryEntries", JSON.stringify(exampleEntries))
    }
  }, [])

  // Update localStorage when entries change
  useEffect(() => {
    localStorage.setItem("dictionaryEntries", JSON.stringify(entries))
  }, [entries])

  const filterAndSortEntries = (search: string, order: string): void => {
    let result = [...entries]

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (entry) =>
          entry.word.toLowerCase().includes(searchLower) ||
          entry.translation.toLowerCase().includes(searchLower) ||
          entry.notes.toLowerCase().includes(searchLower),
      )
    }

    // Sort by selected order
    switch (order) {
      case "alphabetical":
        result.sort((a, b) => a.word.localeCompare(b.word))
        break
      case "recent":
        result.sort((a, b) => b.createdAt - a.createdAt)
        break
      case "oldest":
        result.sort((a, b) => a.createdAt - b.createdAt)
        break
    }

    setFilteredEntries(result)
  }

  // Effect for search with debounce
  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }

    searchTimeout.current = setTimeout(() => {
      filterAndSortEntries(searchTerm, sortOrder)
    }, 300) // 300ms delay

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current)
      }
    }
  }, [searchTerm, sortOrder, entries, filterAndSortEntries])

  // Function to filter and sort entries

  // Function to add a new entry
  const handleAddEntry = (): void => {
    if (!newWord.trim() || !newTranslation.trim()) return

    const newEntry: DictionaryEntry = {
      id: editingId || Date.now().toString(),
      word: newWord.trim(),
      translation: newTranslation.trim(),
      notes: newNotes.trim(),
      createdAt: editingId ? entries.find((e) => e.id === editingId)?.createdAt || Date.now() : Date.now(),
      type: newType,
    }

    if (editingId) {
      // Update an existing entry
      setEntries(entries.map((entry) => (entry.id === editingId ? newEntry : entry)))
    } else {
      // Add a new entry
      setEntries([...entries, newEntry])
    }

    // Reset the form
    resetForm()
    setShowAddForm(false)
  }

  // Function to delete an entry
  const handleDeleteEntry = (id: string): void => {
    setEntries(entries.filter((entry) => entry.id !== id))
  }

  // Function to edit an entry
  const handleEditEntry = (entry: DictionaryEntry): void => {
    setNewWord(entry.word)
    setNewTranslation(entry.translation)
    setNewNotes(entry.notes)
    setNewType(entry.type)
    setEditingId(entry.id)
    setShowAddForm(true)
  }

  // Function to reset the form
  const resetForm = (): void => {
    setNewWord("")
    setNewTranslation("")
    setNewNotes("")
    setNewType("word")
    setEditingId(null)
  }

  // Format date
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
  }

  // Handle menu open
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  // Handle sort selection
  const handleSortSelect = (order: "alphabetical" | "recent" | "oldest") => {
    setSortOrder(order)
    handleMenuClose()
  }

  return (
    <>
      <button
        className="gap-4 bg-indigo-100 text-indigo-600 border border-indigo-200 w-40 h-8 flex justify-center items-center rounded-sm hover:bg-indigo-200 hover:text-indigo-700 hover:cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <BookIcon style={{ height: '16px', width: '16px' }} />
        {t("title")}
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            maxHeight: '90vh',
            maxWidth: '700px',
            width: '95vw',
            borderRadius: '8px',
            padding: '0'
          }
        }}
      >
        <Box sx={{
          background: 'linear-gradient(to right, #4F46E5, #6366F1)',
          padding: '12px 16px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}>
          <DialogTitle sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', padding: '0' }}>
            <BookIcon style={{ height: '20px', width: '20px' }} />
            {t("modal_title")}
          </DialogTitle>
        </Box>

        <DialogContent sx={{ display: 'flex', flexDirection: 'column', padding: '16px 24px' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '12px', mb: '16px', mt: '16px' }}>
            <Box sx={{ position: 'relative', flexGrow: 1 }}>
              <TextField
                placeholder={t("search_input.placeholder")}
                fullWidth
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search style={{ height: '16px', width: '16px', color: '#818CF8' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderColor: '#C7D2FE',
                    '&:focus-within': {
                      borderColor: '#6366F1'
                    }
                  }
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: { xs: 'flex-end', sm: 'auto' } }}>
              <Button
                variant="outlined"
                onClick={handleMenuClick}
                startIcon={<ArrowUpDown style={{ height: '16px', width: '16px' }} />}
                sx={{
                  borderColor: '#C7D2FE',
                  color: '#4F46E5',
                  '&:hover': {
                    backgroundColor: '#EEF2FF',
                    borderColor: '#C7D2FE'
                  }
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>{t("filter.title")}</Box>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={() => handleSortSelect("alphabetical")} sx={{ gap: '8px', '&:focus': { backgroundColor: '#EEF2FF', color: '#4338CA' } }}>
                  <AlphabetLatin style={{ height: '16px', width: '16px' }} />
                  {t("filter.alphabetical")}
                </MenuItem>
                <MenuItem onClick={() => handleSortSelect("recent")} sx={{ gap: '8px', '&:focus': { backgroundColor: '#EEF2FF', color: '#4338CA' } }}>
                  <Clock style={{ height: '16px', width: '16px' }} />
                  {t("filter.recently_added")}
                </MenuItem>
                <MenuItem onClick={() => handleSortSelect("oldest")} sx={{ gap: '8px', '&:focus': { backgroundColor: '#EEF2FF', color: '#4338CA' } }}>
                  <Clock style={{ height: '16px', width: '16px', transform: 'rotate(180deg)' }} />
                  {t("filter.oldest_added")}
                </MenuItem>
              </Menu>

              <Button
                variant={showAddForm ? "contained" : "contained"}
                onClick={() => {
                  resetForm()
                  setShowAddForm(!showAddForm)
                }}
                startIcon={showAddForm ? <X style={{ height: '16px', width: '16px' }} /> : <Plus style={{ height: '16px', width: '16px' }} />}
                sx={{
                  backgroundColor: showAddForm ? '#EF4444' : '#4F46E5',
                  '&:hover': {
                    backgroundColor: showAddForm ? '#DC2626' : '#4338CA'
                  }
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                  {showAddForm ? t("cancel") : t("add")}
                </Box>
              </Button>
            </Box>
          </Box>

          {/* Add/Edit Form */}
          {showAddForm && (
            <Paper
              elevation={0}
              sx={{
                background: 'linear-gradient(to right, #EEF2FF, #F5F3FF)',
                borderRadius: '8px',
                padding: { xs: '12px', sm: '16px' },
                mb: '16px',
                border: '1px solid #E0E7FF',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: { xs: '8px', sm: '12px' }, color: '#4338CA', fontWeight: 500 }}>
                {editingId ? t("add_or_modify_entry.modify_entry") : t("add_or_modify_entry.add_new_entry")}
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: '8px', sm: '12px' }, mb: { xs: '8px', sm: '12px' } }}>
                <Box>
                  <Typography component="label" variant="caption" sx={{ display: 'block', mb: '4px', color: '#4F46E5', fontWeight: 500 }}>
                    {t("add_or_modify_entry.word_expression_sentence.title")}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder={t("add_or_modify_entry.word_expression_sentence.input.placeholder")}
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    size="small"
                    InputProps={{
                      sx: {
                        height: '32px',
                        fontSize: '14px',
                        borderColor: '#C7D2FE',
                        '&:focus-within': {
                          borderColor: '#6366F1'
                        }
                      }
                    }}
                  />
                </Box>

                <Box>
                  <Typography component="label" variant="caption" sx={{ display: 'block', mb: '4px', color: '#4F46E5', fontWeight: 500 }}>
                    {t("add_or_modify_entry.translation.title")}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder={t("add_or_modify_entry.translation.input.placeholder")}
                    value={newTranslation}
                    onChange={(e) => setNewTranslation(e.target.value)}
                    size="small"
                    InputProps={{
                      sx: {
                        height: '32px',
                        fontSize: '14px',
                        borderColor: '#C7D2FE',
                        '&:focus-within': {
                          borderColor: '#6366F1'
                        }
                      }
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ mb: { xs: '8px', sm: '12px' } }}>
                <Typography component="label" variant="caption" sx={{ display: 'block', mb: '4px', color: '#4F46E5', fontWeight: 500 }}>
                  {t("add_or_modify_entry.notes.title")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  placeholder={t("add_or_modify_entry.notes.input.placeholder")}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  rows={2}
                  sx={{
                    fontSize: '14px',
                    '& .MuiOutlinedInput-root': {
                      borderColor: '#C7D2FE',
                      '&:focus-within': {
                        borderColor: '#6366F1'
                      },
                      minHeight: '60px'
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: '12px' }}>
                <Typography component="label" variant="caption" sx={{ display: 'block', mb: '4px', color: '#4F46E5', fontWeight: 500 }}>
                  {t("add_or_modify_entry.types.title")}
                </Typography>
                <TabContext value={newType}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      onChange={(e, newValue) => setNewType(newValue as "word" | "expression" | "sentence")}
                      sx={{
                        minHeight: { xs: '28px', sm: '32px' },
                        backgroundColor: '#E0E7FF',
                        '& .MuiTabs-indicator': { display: 'none' }
                      }}
                    >
                      <Tab
                        label={t("add_or_modify_entry.types.word")}
                        value="word"
                        sx={{
                          fontSize: '12px',
                          minHeight: { xs: '28px', sm: '32px' },
                          padding: { xs: '4px', sm: '8px' },
                          backgroundColor: newType === 'word' ? '#3B82F6' : 'transparent',
                          color: newType === 'word' ? 'white' : 'inherit',
                          '&.Mui-selected': {
                            color: 'white'
                          }
                        }}
                      />
                      <Tab
                        label={t("add_or_modify_entry.types.expression")}
                        value="expression"
                        sx={{
                          fontSize: '12px',
                          minHeight: { xs: '28px', sm: '32px' },
                          padding: { xs: '4px', sm: '8px' },
                          backgroundColor: newType === 'expression' ? '#8B5CF6' : 'transparent',
                          color: newType === 'expression' ? 'white' : 'inherit',
                          '&.Mui-selected': {
                            color: 'white'
                          }
                        }}
                      />
                      <Tab
                        label={t("add_or_modify_entry.types.sentence")}
                        value="sentence"
                        sx={{
                          fontSize: '12px',
                          minHeight: { xs: '28px', sm: '32px' },
                          padding: { xs: '4px', sm: '8px' },
                          backgroundColor: newType === 'sentence' ? '#F59E0B' : 'transparent',
                          color: newType === 'sentence' ? 'white' : 'inherit',
                          '&.Mui-selected': {
                            color: 'white'
                          }
                        }}
                      />
                    </TabList>
                  </Box>
                </TabContext>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    resetForm()
                    setShowAddForm(false)
                  }}
                  sx={{
                    borderColor: '#C7D2FE',
                    color: '#4F46E5',
                    height: { xs: '28px', sm: '32px' },
                    fontSize: { xs: '12px', sm: '14px' },
                    '&:hover': {
                      backgroundColor: '#EEF2FF',
                      borderColor: '#C7D2FE'
                    }
                  }}
                >
                  {t("add_or_modify_entry.types.cancel")}
                </Button>
                <Button
                  variant="contained"
                  onClick={handleAddEntry}
                  disabled={!newWord.trim() || !newTranslation.trim()}
                  sx={{
                    backgroundColor: '#4F46E5',
                    height: { xs: '28px', sm: '32px' },
                    fontSize: { xs: '12px', sm: '14px' },
                    '&:hover': {
                      backgroundColor: '#4338CA'
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#A5B4FC',
                      color: 'white'
                    }
                  }}
                >
                  {editingId ? t("add_or_modify_entry.types.update") : t("add_or_modify_entry.types.add")}
                </Button>
              </Box>
            </Paper>
          )}

          {/* Dictionary Entries */}
          <Box sx={{ flex: 1, overflowY: 'auto', pr: { xs: '8px', sm: '16px' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredEntries.length === 0 ? (
                <Paper
                  elevation={0}
                  sx={{
                    background: 'linear-gradient(to right, #EEF2FF, #F5F3FF)',
                    borderRadius: '8px',
                    padding: { xs: '16px', sm: '24px' },
                    textAlign: 'center'
                  }}
                >
                  {searchTerm ? (
                    <>
                      <Typography sx={{ color: '#4F46E5', mb: '8px' }}>
                        <Box component="span" sx={{ display: 'block' }}>{t("dictionary_entries.no_results_found")}</Box>
                        <Box component="span" sx={{ fontWeight: 500 }}>"{searchTerm}"</Box>
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => setSearchTerm("")}
                        sx={{
                          borderColor: '#C7D2FE',
                          color: '#4F46E5',
                          '&:hover': {
                            backgroundColor: '#EEF2FF',
                            borderColor: '#C7D2FE'
                          }
                        }}
                      >
                        {t("dictionary_entries.buttons.erase_search")}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Typography sx={{ color: '#4F46E5', mb: '8px' }}>
                        {t("add_or_modify_entry.empty.title")}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#818CF8', mb: '16px', maxWidth: '320px', mx: 'auto', display: 'block' }}>
                        {t("add_or_modify_entry.empty.description")}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => setShowAddForm(true)}
                        sx={{
                          backgroundColor: '#4F46E5',
                          '&:hover': {
                            backgroundColor: '#4338CA'
                          }
                        }}
                      >
                        {t("add_or_modify_entry.empty.buttons.add_an_entry")}
                      </Button>
                    </>
                  )}
                </Paper>
              ) : (
                filteredEntries.map((entry) => (
                  <Paper
                    key={entry.id}
                    elevation={1}
                    sx={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.2s',
                      '&:hover': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
                      border: '1px solid',
                      borderColor:
                        entry.type === "word" ? '#BFDBFE' :
                          entry.type === "expression" ? '#E9D5FF' :
                            '#FDE68A'
                    }}
                  >
                    <Box
                      sx={{
                        p: { xs: '8px', sm: '12px' },
                        borderBottom: '1px solid',
                        borderBottomColor:
                          entry.type === "word" ? '#BFDBFE' :
                            entry.type === "expression" ? '#E9D5FF' :
                              '#FDE68A',
                        bgcolor:
                          entry.type === "word" ? '#EFF6FF' :
                            entry.type === "expression" ? '#F5F3FF' :
                              '#FEF3C7',
                        display: 'flex',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: { xs: '4px', sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 500,
                            fontSize: '14px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: { xs: '150px', sm: 'none' },
                            whiteSpace: 'nowrap',
                            color:
                              entry.type === "word" ? '#1E40AF' :
                                entry.type === "expression" ? '#6D28D9' :
                                  '#B45309'
                          }}
                        >
                          {entry.word}
                        </Typography>
                        <Badge
                          sx={{
                            '& .MuiBadge-badge': {
                              fontSize: '12px',
                              fontWeight: 'normal',
                              bgcolor:
                                entry.type === "word" ? '#DBEAFE' :
                                  entry.type === "expression" ? '#EDE9FE' :
                                    '#FEF3C7',
                              color:
                                entry.type === "word" ? '#1E40AF' :
                                  entry.type === "expression" ? '#6D28D9' :
                                    '#B45309',
                              border: '1px solid',
                              borderColor:
                                entry.type === "word" ? '#BFDBFE' :
                                  entry.type === "expression" ? '#E9D5FF' :
                                    '#FDE68A'
                            }
                          }}
                          badgeContent={
                            entry.type === "word" ? t("add_or_modify_entry.types.word") :
                              entry.type === "expression" ? t("add_or_modify_entry.types.expression") : t("add_or_modify_entry.types.sentence")
                          }
                        />
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
                        <IconButton
                          size="small"
                          onClick={() => handleEditEntry(entry)}
                          sx={{
                            height: '28px',
                            width: '28px',
                            color:
                              entry.type === "word" ? '#2563EB' :
                                entry.type === "expression" ? '#8B5CF6' :
                                  '#D97706',
                            '&:hover': {
                              bgcolor:
                                entry.type === "word" ? '#DBEAFE' :
                                  entry.type === "expression" ? '#EDE9FE' :
                                    '#FEF3C7'
                            }
                          }}
                        >
                          <Edit2 style={{ height: '14px', width: '14px' }} />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteEntry(entry.id)}
                          sx={{
                            height: '28px',
                            width: '28px',
                            color: '#EF4444',
                            '&:hover': {
                              bgcolor: '#FEE2E2'
                            }
                          }}
                        >
                          <Trash2 style={{ height: '14px', width: '14px' }} />
                        </IconButton>
                      </Box>
                    </Box>

                    <Box sx={{ p: { xs: '8px', sm: '12px' }, bgcolor: 'white' }}>
                      <Box sx={{ mb: '4px' }}>
                        <Typography variant="caption" sx={{ color: '#64748B' }}>
                          {t("dictionary_entries.translation")}
                        </Typography>
                        <Typography variant="body2">
                          {entry.translation}
                        </Typography>
                      </Box>

                      {entry.notes && (
                        <Box sx={{ mb: '4px' }}>
                          <Typography variant="caption" sx={{ color: '#64748B' }}>
                          {t("dictionary_entries.notes")}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#334155', display: 'block' }}>
                            {entry.notes}
                          </Typography>
                        </Box>
                      )}

                      <Box sx={{ mt: '8px', display: 'flex', alignItems: 'center', color: '#94A3B8', fontSize: '12px' }}>
                        <Clock style={{ height: '12px', width: '12px', marginRight: '4px' }} />
                        <Typography variant="caption" sx={{ color: '#94A3B8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {t("dictionary_entries.added_at")} {formatDate(entry.createdAt)}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                ))
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}