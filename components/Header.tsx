import { Box, Container, Typography, Chip, Button } from "@mui/material"
import { PlayArrow, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material"

interface HeaderProps {
  currentStep: number
}

export default function Header({ currentStep }: HeaderProps) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #e5e7eb",
        py: 2,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "#111827" }}>
              Instagram Automation
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
              <Chip
                icon={
                  currentStep >= 0 ? (
                    <CheckCircle sx={{ fontSize: "16px !important" }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "16px !important" }} />
                  )
                }
                label="Content"
                color={currentStep >= 0 ? "success" : "default"}
                variant={currentStep === 0 ? "filled" : "outlined"}
                size="small"
              />
              <Chip
                icon={
                  currentStep >= 1 ? (
                    <CheckCircle sx={{ fontSize: "16px !important" }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "16px !important" }} />
                  )
                }
                label="Trigger"
                color={currentStep >= 1 ? "success" : "default"}
                variant={currentStep === 1 ? "filled" : "outlined"}
                size="small"
              />
              <Chip
                icon={
                  currentStep >= 2 ? (
                    <CheckCircle sx={{ fontSize: "16px !important" }} />
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "16px !important" }} />
                  )
                }
                label="Response"
                color={currentStep >= 2 ? "success" : "default"}
                variant={currentStep === 2 ? "filled" : "outlined"}
                size="small"
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              startIcon={<PlayArrow />}
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "#10b981",
                "&:hover": {
                  bgcolor: "#059669",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
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
