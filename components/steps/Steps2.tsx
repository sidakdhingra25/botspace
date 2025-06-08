"use client"

import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Card,
  CardContent,
  TextField,
  Chip,
  Stack,
} from "@mui/material"
import type { StepProps } from "../../types"
import { POPULAR_KEYWORDS } from "../../utils/constants"

export default function Step2({ state, setState }: StepProps) {
  return (
    <Box
      sx={{
        opacity: state.isAnimating ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700, color: "#1a1a1a" }}>
          Configure Comment Trigger
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Define what comments will activate your automation
        </Typography>
      </Box>

      <Stack spacing={2}>
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 2 }}>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={state.commentType}
                onChange={(e) => setState((prev) => ({ ...prev, commentType: e.target.value }))}
              >
                <FormControlLabel
                  value="specific"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": { color: "#6366f1" },
                        color: "#e5e7eb",
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
                        Specific keywords
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Trigger when comments contain certain words
                      </Typography>
                    </Box>
                  }
                  sx={{ mb: 1, alignItems: "flex-start" }}
                />
              </RadioGroup>
            </FormControl>

            {state.commentType === "specific" && (
              <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid #f3f4f6" }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                  Keywords to watch for:
                </Typography>
                <TextField
                  fullWidth
                  value={state.commentKeyword}
                  onChange={(e) => setState((prev) => ({ ...prev, commentKeyword: e.target.value }))}
                  placeholder="Enter keywords separated by commas"
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
                <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
                  Use commas to separate multiple keywords (e.g., &quot;price, cost, buy&quot;)
                </Typography>

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: "#374151" }}>
                    Popular keywords:
                  </Typography>
                  <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap" }}>
                    {POPULAR_KEYWORDS.map((word) => (
                      <Chip
                        key={word}
                        label={word}
                        variant="outlined"
                        size="small"
                        onClick={() => setState((prev) => ({ ...prev, commentKeyword: word }))}
                        sx={{
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          borderColor: "#d1d5db",
                          height: 24,
                          fontSize: "0.75rem",
                          "&:hover": {
                            backgroundColor: "#6366f1",
                            borderColor: "#6366f1",
                            color: "white",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ borderRadius: 3, opacity: 0.6 }}>
          <CardContent sx={{ p: 2 }}>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={state.commentType}
                onChange={(e) => setState((prev) => ({ ...prev, commentType: e.target.value }))}
              >
                <FormControlLabel
                  value="any"
                  control={<Radio disabled />}
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
                        Any comment
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Respond to every comment automatically
                      </Typography>
                    </Box>
                  }
                  sx={{ alignItems: "flex-start" }}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}
