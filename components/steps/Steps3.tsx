"use client"

import { Box, Typography, Card, CardContent, Switch, TextField, Button, Stack } from "@mui/material"
import { Info, Add } from "@mui/icons-material"
import type { StepProps } from "../../types"

export default function Step3({ state, setState }: StepProps) {
  return (
    <Box
      sx={{
        opacity: state.isAnimating ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700, color: "#1a1a1a" }}>
          Setup Automated Response
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Configure what messages users will receive
        </Typography>
      </Box>

      <Stack spacing={2}>
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
                  Opening DM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First message sent to the user
                </Typography>
              </Box>
              <Switch
                checked={state.dmEnabled}
                onChange={(e) => setState((prev) => ({ ...prev, dmEnabled: e.target.checked }))}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#10b981",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#10b981",
                  },
                }}
              />
            </Box>

            {state.dmEnabled && (
              <Box>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  value={state.dmMessage}
                  onChange={(e) => setState((prev) => ({ ...prev, dmMessage: e.target.value }))}
                  placeholder="Enter your opening message..."
                  variant="outlined"
                  size="small"
                  sx={{
                    mb: 1.5,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                      fontSize: "0.875rem",
                      "&:hover": {
                        "& > fieldset": { borderColor: "#6366f1" },
                      },
                      "&.Mui-focused": {
                        "& > fieldset": { borderColor: "#6366f1" },
                      },
                    },
                  }}
                />
                <Button
                  variant="text"
                  startIcon={<Info sx={{ fontSize: 16 }} />}
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: "#6b7280",
                    fontSize: "0.75rem",
                    "&:hover": { backgroundColor: "rgba(107, 114, 128, 0.04)" },
                  }}
                >
                  Why does an Opening DM matter?
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
                Follow-up Message
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Message with your link or content
              </Typography>
            </Box>

            <TextField
              fullWidth
              multiline
              rows={2}
              value={state.linkMessage}
              onChange={(e) => setState((prev) => ({ ...prev, linkMessage: e.target.value }))}
              placeholder="Enter your follow-up message..."
              variant="outlined"
              size="small"
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                  fontSize: "0.875rem",
                  "&:hover": {
                    "& > fieldset": { borderColor: "#6366f1" },
                  },
                  "&.Mui-focused": {
                    "& > fieldset": { borderColor: "#6366f1" },
                  },
                },
              }}
            />

            <Button
              variant="outlined"
              startIcon={<Add sx={{ fontSize: 16 }} />}
              fullWidth
              size="small"
              sx={{
                textTransform: "none",
                py: 1,
                borderRadius: 1.5,
                borderColor: "#6366f1",
                color: "#6366f1",
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.04)",
                  borderColor: "#6366f1",
                },
              }}
            >
              Add Link or Attachment
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}
