"use client"

import { Box, Container, Grid, Paper, LinearProgress, Typography, Button, Divider } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

import Header from "../components/Header"
import Step1 from "../components/steps/Steps1"
import Step2 from "../components/steps/Steps2"
import Step3 from "../components/steps/Steps3"
import InstagramPreview from "../components/InstagramPreview"
import { useWorkflowState } from "../hooks/useWorkflowState"
import { demoPosts } from "../data/demoPosts"

export default function InstagramWorkflowBuilder() {
  const { state, setState, handleNext, handleBack } = useWorkflowState()

  const selectedPostData = demoPosts.find((post) => post.id === state.selectedPostId) || demoPosts[0]

  if (!state.mounted) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "#fafbfc",
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ bgcolor: "#fafbfc", minHeight: "100vh" }}>
      <Header currentStep={state.currentStep} />

      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Main Content */}
          <Grid>
            <Paper
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid #f3f4f6",
                opacity: state.mounted ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              {/* Progress Bar */}
              <Box sx={{ mb: 4 }}>
                <LinearProgress
                  variant="determinate"
                  value={((state.currentStep + 1) / 3) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: "#f3f4f6",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "#6366f1",
                      borderRadius: 4,
                    },
                  }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  Step {state.currentStep + 1} of 3 - {Math.round(((state.currentStep + 1) / 3) * 100)}% complete
                </Typography>
              </Box>

              {state.currentStep === 0 && <Step1 state={state} setState={setState} demoPosts={demoPosts} />}
              {state.currentStep === 1 && <Step2 state={state} setState={setState} demoPosts={demoPosts} />}
              {state.currentStep === 2 && <Step3 state={state} setState={setState} demoPosts={demoPosts} />}

              <Divider sx={{ my: 4 }} />

              {/* Navigation */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  disabled={state.currentStep === 0}
                  startIcon={<ArrowBack />}
                  sx={{
                    textTransform: "none",
                    borderColor: "#e5e7eb",
                    color: "#6b7280",
                    "&:hover": {
                      backgroundColor: "#f9fafb",
                      borderColor: "#d1d5db",
                    },
                    "&:disabled": {
                      opacity: 0.5,
                    },
                  }}
                >
                  Previous
                </Button>

                <Box sx={{ display: "flex", gap: 1 }}>
                  {[0, 1, 2].map((step) => (
                    <Box
                      key={step}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: state.currentStep >= step ? "#6366f1" : "#e5e7eb",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </Box>

                {state.currentStep < 2 ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    endIcon={<ArrowForward />}
                    sx={{
                      textTransform: "none",
                      bgcolor: "#6366f1",
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "#5b21b6",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                      },
                    }}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      bgcolor: "#10b981",
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "#059669",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      },
                    }}
                  >
                    Save Workflow
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>

          {/* Mobile Preview */}
          <Grid>
            <Box
              sx={{
                position: { xs: "relative", md: "sticky" },
                top: { md: 100 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: { xs: "flex-start", md: "center" },
                opacity: state.mounted ? 1 : 0,
                transition: "opacity 0.5s ease",
                py: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: "#374151" }}>
                Live Preview
              </Typography>
              <InstagramPreview state={state} setState={setState} selectedPostData={selectedPostData} />

              {/* Preview Info */}
              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
