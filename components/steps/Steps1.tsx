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
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700, color: "#1a1a1a" }}>
          Select Your Content
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Choose which posts or reels will trigger the automation
        </Typography>
      </Box>

      <Stack spacing={2}>
        <Card variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
          <CardContent sx={{ p: 2 }}>
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
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
                        Specific post or reel
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Target a particular piece of content
                      </Typography>
                    </Box>
                  }
                  sx={{ mb: 1, alignItems: "flex-start" }}
                />
              </RadioGroup>
            </FormControl>

            {state.selectedPost === "specific" && (
              <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid #f3f4f6" }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                  Choose a post:
                </Typography>
                <Grid container spacing={1.5} sx={{ mb: 2 }}>
                  {(state.showAllPosts ? demoPosts : demoPosts.slice(0, 4)).map((post, index) => (
                    <Grid key={post.id}>
                      <Box
                        onClick={() => handlePostSelect(post.id)}
                        sx={{
                          position: "relative",
                          cursor: "pointer",
                          borderRadius: 2,
                          overflow: "hidden",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: state.selectedPostId === post.id ? "scale(1.02)" : "scale(1)",
                          border: state.selectedPostId === post.id ? "2px solid #6366f1" : "2px solid transparent",
                          boxShadow:
                            state.selectedPostId === post.id
                              ? "0 6px 16px rgba(99, 102, 241, 0.2)"
                              : "0 2px 8px rgba(0,0,0,0.06)",
                          "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
                            height: 80,
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            bgcolor: "rgba(0,0,0,0.6)",
                            borderRadius: 1,
                            px: 0.5,
                            py: 0.25,
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <FilterNone sx={{ color: "white", fontSize: 12 }} />
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
                              width: 24,
                              height: 24,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 8px rgba(99, 102, 241, 0.4)",
                            }}
                          >
                            <CheckCircle sx={{ color: "white", fontSize: 16 }} />
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
                    fontSize: "0.875rem",
                    py: 0.5,
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
          <CardContent sx={{ p: 2 }}>
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
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
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
                          fontSize: "0.625rem",
                          height: 20,
                        }}
                      />
                    </Box>
                  }
                  sx={{ mb: 1, alignItems: "flex-start" }}
                />
                <FormControlLabel
                  value="next"
                  control={<Radio disabled />}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.25 }}>
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
                          fontSize: "0.625rem",
                          height: 20,
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
