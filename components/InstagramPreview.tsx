"use client"

import type React from "react"

import { Box, Typography, Avatar, IconButton, Button } from "@mui/material"
import {
  ArrowBack,
  FavoriteBorder,
  Favorite,
  ChatBubbleOutline,
  Send,
  BookmarkBorder,
  Bookmark,
  MoreHoriz,
  Phone,
  VideoCall,
  CameraAlt,
  Mic,
  EmojiEmotions,
} from "@mui/icons-material"
import type { WorkflowState, DemoPost } from "../types"
import { EMOJI_REACTIONS } from "../utils/constants"

interface InstagramPreviewProps {
  state: WorkflowState
  setState: React.Dispatch<React.SetStateAction<WorkflowState>>
  selectedPostData: DemoPost
}

export default function InstagramPreview({ state, setState, selectedPostData }: InstagramPreviewProps) {
  if (state.currentStep === 0) {
    return (
      <Box
        sx={{
          width: 280,
          height: 560,
          bgcolor: "#000",
          borderRadius: 6,
          overflow: "hidden",
          position: "relative",
          opacity: state.isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Status bar */}
        <Box
          sx={{
            height: 36,
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography variant="caption">9:41</Typography>
        </Box>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <ArrowBack sx={{ fontSize: 18 }} />
          <Typography variant="subtitle1">Posts</Typography>
          <Box />
        </Box>

        {/* Profile section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Avatar sx={{ width: 28, height: 28, mr: 1 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
          <Typography variant="body2">{selectedPostData.username}</Typography>
          <MoreHoriz sx={{ ml: "auto", fontSize: 18 }} />
        </Box>

        {/* Post image */}
        <Box
          sx={{
            height: 280,
            width: "100%",
            backgroundImage: `url(${selectedPostData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Action buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <IconButton
              onClick={() => setState((prev) => ({ ...prev, liked: !prev.liked }))}
              sx={{
                color: state.liked ? "#ff3040" : "white",
                transition: "all 0.2s ease",
                p: 0.5,
              }}
            >
              {state.liked ? <Favorite sx={{ fontSize: 18 }} /> : <FavoriteBorder sx={{ fontSize: 18 }} />}
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <ChatBubbleOutline sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <Send sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
          <IconButton
            onClick={() => setState((prev) => ({ ...prev, bookmarked: !prev.bookmarked }))}
            sx={{
              color: state.bookmarked ? "#ffd700" : "white",
              transition: "all 0.2s ease",
              p: 0.5,
            }}
          >
            {state.bookmarked ? <Bookmark sx={{ fontSize: 18 }} /> : <BookmarkBorder sx={{ fontSize: 18 }} />}
          </IconButton>
        </Box>

        {/* Likes and caption */}
        <Box sx={{ px: 2, py: 0.75, bgcolor: "#000", color: "white" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5 }}>
            {state.liked ? selectedPostData.likes + 1 : selectedPostData.likes} likes
          </Typography>
          <Typography variant="caption">
            <strong>{selectedPostData.username}</strong> {selectedPostData.caption}
          </Typography>
        </Box>
      </Box>
    )
  }

  if (state.currentStep === 1) {
    return (
      <Box
        sx={{
          width: 280,
          height: 560,
          bgcolor: "#000",
          borderRadius: 6,
          overflow: "hidden",
          position: "relative",
          opacity: state.isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
          // boxShadow removed
        }}
      >
        {/* Status bar */}
        <Box
          sx={{
            height: 36,
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography variant="caption">9:41</Typography>
        </Box>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <ArrowBack sx={{ fontSize: 18 }} />
          <Typography variant="subtitle1">Posts</Typography>
          <Box />
        </Box>

        {/* Profile section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Avatar sx={{ width: 28, height: 28, mr: 1 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
          <Typography variant="body2">{selectedPostData.username}</Typography>
          <MoreHoriz sx={{ ml: "auto", fontSize: 18 }} />
        </Box>

        {/* Post image - SAME SIZE as step 1 */}
        <Box
          sx={{
            height: 280,
            width: "100%",
            backgroundImage: `url(${selectedPostData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Action buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <IconButton
              onClick={() => setState((prev) => ({ ...prev, liked: !prev.liked }))}
              sx={{
                color: state.liked ? "#ff3040" : "white",
                transition: "all 0.2s ease",
                p: 0.5,
              }}
            >
              {state.liked ? <Favorite sx={{ fontSize: 18 }} /> : <FavoriteBorder sx={{ fontSize: 18 }} />}
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <ChatBubbleOutline sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <Send sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
          <IconButton
            onClick={() => setState((prev) => ({ ...prev, bookmarked: !prev.bookmarked }))}
            sx={{
              color: state.bookmarked ? "#ffd700" : "white",
              transition: "all 0.2s ease",
              p: 0.5,
            }}
          >
            {state.bookmarked ? <Bookmark sx={{ fontSize: 18 }} /> : <BookmarkBorder sx={{ fontSize: 18 }} />}
          </IconButton>
        </Box>

        {/* Likes count */}
        <Box sx={{ px: 2, py: 0.75, bgcolor: "#000", color: "white" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {state.liked ? selectedPostData.likes + 1 : selectedPostData.likes} likes
          </Typography>
        </Box>

        {/* Comments section sliding up from bottom - covering HALF the screen */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%", // Covers exactly half the screen
            bgcolor: "#000",
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            transform: state.mounted ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {/* Comments handle */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 0.75,
              borderBottom: "1px solid #333",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 4,
                bgcolor: "#666",
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Comments header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
              borderBottom: "1px solid #333",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
              Comments
            </Typography>
          </Box>

          {/* Comments list */}
          <Box sx={{ flex: 1, overflowY: "auto", px: 2, py: 0.5 }}>
            {/* Sample comment with trigger keyword */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                py: 1.5,
                color: "white",
              }}
            >
              <Avatar sx={{ width: 28, height: 28, mr: 1.5 }}>U</Avatar>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    username
                  </Typography>
                  <Typography variant="caption" color="grey.400">
                    2m
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  {state.commentKeyword}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography
                    variant="caption"
                    color="grey.400"
                    sx={{
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Reply
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={() => setState((prev) => ({ ...prev, commentLiked: !prev.commentLiked }))}
                sx={{
                  color: state.commentLiked ? "#ff3040" : "white",
                  transition: "all 0.2s ease",
                  p: 0.25,
                }}
              >
                {state.commentLiked ? <Favorite sx={{ fontSize: 16 }} /> : <FavoriteBorder sx={{ fontSize: 16 }} />}
              </IconButton>
            </Box>
          </Box>

          {/* Emoji reactions bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              py: 1,
              borderTop: "1px solid #333",
              borderBottom: "1px solid #333",
            }}
          >
            {EMOJI_REACTIONS.slice(0, 6).map((emoji, index) => (
              <Box
                key={index}
                sx={{
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  opacity: 0.8,
                  "&:hover": { opacity: 1, transform: "scale(1.2)" },
                }}
              >
                {emoji}
              </Box>
            ))}
          </Box>

          {/* Comment input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 1,
              borderTop: "1px solid #333",
            }}
          >
            <Avatar sx={{ width: 24, height: 24, mr: 1 }}>Y</Avatar>
            <Box
              sx={{
                flex: 1,
                bgcolor: "#222",
                borderRadius: 5,
                px: 1.5,
                py: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                border: "1px solid #333",
              }}
            >
              <Typography variant="caption" color="grey.400" sx={{ flex: 1 }}>
                Add a comment...
              </Typography>
              <EmojiEmotions sx={{ fontSize: 16, color: "grey.400" }} />
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: "#0095f6",
                ml: 1,
                cursor: "pointer",
                fontWeight: 600,
                "&:hover": { opacity: 0.7 },
              }}
            >
              Post
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  }

  if (state.currentStep === 2) {
    return (
      <Box
        sx={{
          width: 280,
          height: 560,
          bgcolor: "#000",
          borderRadius: 6,
          overflow: "hidden",
          position: "relative",
          opacity: state.isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
          // boxShadow removed
        }}
      >
        {/* Status bar */}
        <Box
          sx={{
            height: 36,
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            color: "white",
          }}
        >
          <Typography variant="caption">1:37</Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Box sx={{ width: 3, height: 3, bgcolor: "white", borderRadius: "50%" }} />
            <Box sx={{ width: 3, height: 3, bgcolor: "white", borderRadius: "50%" }} />
            <Box sx={{ width: 3, height: 3, bgcolor: "white", borderRadius: "50%" }} />
            <Box sx={{ width: 3, height: 3, bgcolor: "white", borderRadius: "50%" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ width: 16, height: 8, border: "1px solid white", borderRadius: 1 }} />
            <Typography variant="caption">100%</Typography>
          </Box>
        </Box>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 0.75,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <ArrowBack sx={{ fontSize: 18 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ width: 24, height: 24 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
            <Typography variant="body2">{selectedPostData.username}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Phone sx={{ fontSize: 18 }} />
            <VideoCall sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Messages */}
        <Box sx={{ flex: 1, px: 2, py: 1.5, bgcolor: "#000", height: 400, overflowY: "auto" }}>
          {/* Received message (bot message) */}
          {state.dmEnabled && state.dmMessage && (
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  bgcolor: "#333",
                  color: "white",
                  p: 1.5,
                  borderRadius: 3,
                  maxWidth: "80%",
                  fontSize: "13px",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {state.dmMessage}
              </Box>
            </Box>
          )}

          {/* Button message */}
          {state.dmEnabled && (
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  bgcolor: "#333",
                  color: "white",
                  p: 1,
                  borderRadius: 3,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    py: 0.5,
                    px: 1,
                  }}
                >
                  Send me the link
                </Button>
              </Box>
            </Box>
          )}

          {/* User's response (sent message) */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Box
              sx={{
                bgcolor: "#0084ff",
                color: "white",
                p: 1.5,
                borderRadius: 3,
                maxWidth: "80%",
                fontSize: "13px",
              }}
            >
              Send me the link
            </Box>
          </Box>

          {/* Bot's link message */}
          {state.linkMessage && (
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  bgcolor: "#333",
                  color: "white",
                  p: 1.5,
                  borderRadius: 3,
                  maxWidth: "80%",
                  fontSize: "13px",
                  whiteSpace: "pre-line",
                }}
              >
                {state.linkMessage}
              </Box>
            </Box>
          )}
        </Box>

        {/* Message input */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1,
            bgcolor: "#000",
            borderTop: "1px solid #333",
          }}
        >
          <Avatar sx={{ width: 24, height: 24, mr: 1 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#333",
              borderRadius: 5,
              px: 1.5,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="caption" color="grey.400" sx={{ flex: 1 }}>
              Message...
            </Typography>
            <CameraAlt sx={{ fontSize: 14, color: "grey.400" }} />
            <Mic sx={{ fontSize: 14, color: "grey.400" }} />
            <EmojiEmotions sx={{ fontSize: 14, color: "grey.400" }} />
          </Box>
        </Box>
      </Box>
    )
  }

  return null
}
