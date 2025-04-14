import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Loading: React.FC = () => {
  return (
    <Container sx={{ py: 8, px: 4 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Skeleton variant="rectangular" width={256} height={40} sx={{ mx: 'auto', mb: 2 }} />
        <Skeleton variant="text" width={384} height={20} sx={{ mx: 'auto', mb: 6 }} />

        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Skeleton variant="text" width={96} height={16} />
            <Skeleton variant="text" width={128} height={16} />
          </Box>
          <Skeleton variant="text" width="100%" height={8} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          justifyContent: 'center',
        }}
      >
        {[...Array(9)].map((_, i) => (
          <Box
            key={i}
            sx={{
              width: {
                xs: '100%',
                sm: '48%',
                md: '31%',
              },
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 6 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                <Skeleton variant="circular" width={48} height={48} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Skeleton variant="rectangular" width={64} height={24} sx={{ mr: 2 }} />
                  <Skeleton variant="circular" width={20} height={20} />
                </Box>
              </Box>

              <Skeleton variant="text" width="75%" height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="100%" height={20} sx={{ mb: 3 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Skeleton variant="rectangular" width={96} height={24} />
                <Skeleton variant="rectangular" width={64} height={24} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Loading;
