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
  Grid,
  Button,
  Chip,
  Stack,
} from "@mui/material"
import { CheckCircle, FilterNone } from "@mui/icons-material"
import type { StepProps } from "../../types"

export default function Step1({ state, setState, demoPosts }: StepProps) {
  const handlePostSelect = (postId: number) => {
    setState((prev) => ({ ...prev, selectedPostId: postId }))
  }

  return (
    <Box
      sx={{
        opacity: state.isAnimating ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: "#1a1a1a" }}>
          Select Your Content
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Choose which posts or reels will trigger the automation
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Card variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
          <CardContent sx={{ p: 3 }}>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={state.selectedPost}
                onChange={(e) => setState((prev) => ({ ...prev, selectedPost: e.target.value }))}
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
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Specific post or reel
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Target a particular piece of content
                      </Typography>
                    </Box>
                  }
                  sx={{ mb: 2, alignItems: "flex-start" }}
                />
              </RadioGroup>
            </FormControl>

            {state.selectedPost === "specific" && (
              <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid #f3f4f6" }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Choose a post:
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {(state.showAllPosts ? demoPosts : demoPosts.slice(0, 4)).map((post, index) => (
                    <Grid key={post.id}>
                      <Box
                        onClick={() => handlePostSelect(post.id)}
                        sx={{
                          position: "relative",
                          cursor: "pointer",
                          borderRadius: 3,
                          overflow: "hidden",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: state.selectedPostId === post.id ? "scale(1.02)" : "scale(1)",
                          border: state.selectedPostId === post.id ? "3px solid #6366f1" : "3px solid transparent",
                          boxShadow:
                            state.selectedPostId === post.id
                              ? "0 10px 30px rgba(99, 102, 241, 0.3)"
                              : "0 4px 12px rgba(0,0,0,0.08)",
                          "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                          },
                          opacity: state.mounted ? 1 : 0,
                          animation: state.mounted ? `fadeIn 0.5s ease forwards ${index * 0.1}s` : "none",
                          "@keyframes fadeIn": {
                            "0%": {
                              opacity: 0,
                              transform: "translateY(10px)",
                            },
                            "100%": {
                              opacity: 1,
                              transform: state.selectedPostId === post.id ? "scale(1.02)" : "scale(1)",
                            },
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={post.image}
                          alt={post.title}
                          sx={{
                            width: "100%",
                            height: 100,
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 6,
                            right: 6,
                            bgcolor: "rgba(0,0,0,0.6)",
                            borderRadius: 1.5,
                            px: 1,
                            py: 0.5,
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <FilterNone sx={{ color: "white", fontSize: 14 }} />
                        </Box>
                        {state.selectedPostId === post.id && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              bgcolor: "#6366f1",
                              borderRadius: "50%",
                              width: 32,
                              height: 32,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
                            }}
                          >
                            <CheckCircle sx={{ color: "white", fontSize: 20 }} />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant="text"
                  onClick={() => setState((prev) => ({ ...prev, showAllPosts: !prev.showAllPosts }))}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    color: "#6366f1",
                    "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.04)" },
                  }}
                >
                  {state.showAllPosts ? "Show Less" : `Show All ${demoPosts.length} Posts`}
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ borderRadius: 3, opacity: 0.6 }}>
          <CardContent sx={{ p: 3 }}>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={state.selectedPost}
                onChange={(e) => setState((prev) => ({ ...prev, selectedPost: e.target.value }))}
              >
                <FormControlLabel
                  value="any"
                  control={<Radio disabled />}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Any post or reel
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Trigger on all your content
                        </Typography>
                      </Box>
                      <Chip
                        label="PRO"
                        size="small"
                        sx={{
                          bgcolor: "#fbbf24",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                        }}
                      />
                    </Box>
                  }
                  sx={{ mb: 2, alignItems: "flex-start" }}
                />
                <FormControlLabel
                  value="next"
                  control={<Radio disabled />}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Next post or reel
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Apply to your upcoming content
                        </Typography>
                      </Box>
                      <Chip
                        label="PRO"
                        size="small"
                        sx={{
                          bgcolor: "#fbbf24",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                        }}
                      />
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
