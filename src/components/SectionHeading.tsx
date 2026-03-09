import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

interface SectionHeadingProps {
    title: string;
    sx?: SxProps<Theme>;
}

const SectionHeading = ({ title, sx }: SectionHeadingProps) => {
    return (
        <Box sx={{
            width: '100%',
            backgroundColor: 'transparent',
            borderBottom: '2px solid #fff',
            pt: { xs: 8, md: 8 },
            mb: 5,
            ...sx
        }}>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '12vw', md: '8vw' },
                    fontWeight: 900,
                    color: '#fff',
                    pb: 4,
                    lineHeight: 1
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default SectionHeading;
