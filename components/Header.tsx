import { Box, Container, Typography, Chip, Button } from "@mui/material"
import { Analytics, PlayArrow, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material"

interface HeaderProps {
  currentStep: number
}

export default function Header({ currentStep }: HeaderProps) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #e5e7eb",
        py: 1.5,
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "64px",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#111827" }}>
              Instagram Automation
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip
                icon={
                  currentStep >= 0 ? (
                    <CheckCircle sx={{ fontSize: "14px !important" }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "14px !important" }} />
                  )
                }
                label="Content"
                color={currentStep >= 0 ? "success" : "default"}
                variant={currentStep === 0 ? "filled" : "outlined"}
                size="small"
                sx={{ height: 24 }}
              />
              <Chip
                icon={
                  currentStep >= 1 ? (
                    <CheckCircle sx={{ fontSize: "14px !important" }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "14px !important" }} />
                  )
                }
                label="Trigger"
                color={currentStep >= 1 ? "success" : "default"}
                variant={currentStep === 1 ? "filled" : "outlined"}
                size="small"
                sx={{ height: 24 }}
              />
              <Chip
                icon={
                  currentStep >= 2 ? (
                    <CheckCircle sx={{ fontSize: "14px !important" }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "14px !important" }} />
                  )
                }
                label="Response"
                color={currentStep >= 2 ? "success" : "default"}
                variant={currentStep === 2 ? "filled" : "outlined"}
                size="small"
                sx={{ height: 24 }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              startIcon={<Analytics />}
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                borderColor: "#e5e7eb",
                color: "#6b7280",
                "&:hover": {
                  backgroundColor: "#f9fafb",
                  borderColor: "#d1d5db",
                },
              }}
            >
              Analytics
            </Button>
            <Button
              startIcon={<PlayArrow />}
              variant="contained"
              size="small"
              sx={{
                textTransform: "none",
                bgcolor: "#10b981",
                "&:hover": {
                  bgcolor: "#059669",
                },
              }}
            >
              Go Live
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
