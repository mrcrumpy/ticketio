import { useI18n } from "@/locales/client";
import { Box, Typography } from "@mui/material";

const EmptyState = () => {
  const t = useI18n();
  return (
    <Box>
      <Typography
        component="h2"
        variant="h1"
        paddingY={4}
        display="flex"
        justifyContent="center"
      >
        {t("There were no events found")}
      </Typography>
    </Box>
  );
};

export default EmptyState;
