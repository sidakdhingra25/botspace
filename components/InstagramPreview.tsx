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
          width: 320,
          height: 690,
          bgcolor: "#000",
          borderRadius: 8,
          overflow: "hidden",
          position: "relative",
          opacity: state.isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          border: "8px solid #1a1a1a",
          "&::before": {
            content: '""',
            position: "fixed",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 30,
            bgcolor: "#000",
            borderRadius: "0 0 20px 20px",
            zIndex: 10,
          },
        }}
      >
        {/* Dynamic Island */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 30,
            bgcolor: "#000",
            borderRadius: "20px",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#333",
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 8,
              bgcolor: "#333",
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* Status bar */}
        <Box
          sx={{
            height: 50,
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            pt: 2,
            color: "white",
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            9:41
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 1 }}>
              <Box sx={{ width: 20, height: 12, border: "1px solid white", borderRadius: 2 }} />
              <Typography variant="caption">100%</Typography>
            </Box>
          </Box>
        </Box>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 1,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <ArrowBack sx={{ fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Posts
          </Typography>
          <Box />
        </Box>

        {/* Profile section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 3,
            py: 1.5,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Avatar sx={{ width: 32, height: 32, mr: 1.5 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {selectedPostData.username}
          </Typography>
          <MoreHoriz sx={{ ml: "auto", fontSize: 20 }} />
        </Box>

        {/* Post image */}
        <Box
          sx={{
            height: 320,
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
            px: 3,
            py: 1.5,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              onClick={() => setState((prev) => ({ ...prev, liked: !prev.liked }))}
              sx={{
                color: state.liked ? "#ff3040" : "white",
                transition: "all 0.2s ease",
                p: 0.5,
              }}
            >
              {state.liked ? <Favorite sx={{ fontSize: 20 }} /> : <FavoriteBorder sx={{ fontSize: 20 }} />}
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <ChatBubbleOutline sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <Send sx={{ fontSize: 20 }} />
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
            {state.bookmarked ? <Bookmark sx={{ fontSize: 20 }} /> : <BookmarkBorder sx={{ fontSize: 20 }} />}
          </IconButton>
        </Box>

        {/* Likes and caption */}
        <Box sx={{ px: 3, py: 1.5, bgcolor: "#000", color: "white" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5 }}>
            {state.liked ? selectedPostData.likes + 1 : selectedPostData.likes} likes
          </Typography>
          <Typography variant="body2">
            <strong>{selectedPostData.username}</strong> {selectedPostData.caption}
          </Typography>
        </Box>

        {/* Home indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 134,
            height: 5,
            bgcolor: "white",
            borderRadius: "3px",
            opacity: 0.6,
          }}
        />
      </Box>
    )
  }

  if (state.currentStep === 1) {
    return (
      <Box
        sx={{
          width: 320,
          height: 690,
          bgcolor: "#000",
          borderRadius: 8,
          overflow: "hidden",
          position: "relative",
          opacity: state.isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          border: "8px solid #1a1a1a",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 30,
            bgcolor: "#000",
            borderRadius: "0 0 20px 20px",
            zIndex: 10,
          },
        }}
      >
        {/* Dynamic Island */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 30,
            bgcolor: "#000",
            borderRadius: "20px",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#333",
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 8,
              bgcolor: "#333",
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* Status bar */}
        <Box
          sx={{
            height: 50,
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            pt: 2,
            color: "white",
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            9:41
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 1 }}>
              <Box sx={{ width: 20, height: 12, border: "1px solid white", borderRadius: 2 }} />
              <Typography variant="caption">100%</Typography>
            </Box>
          </Box>
        </Box>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 1,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <ArrowBack sx={{ fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Posts
          </Typography>
          <Box />
        </Box>

        {/* Profile section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 3,
            py: 1.5,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Avatar sx={{ width: 32, height: 32, mr: 1.5 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {selectedPostData.username}
          </Typography>
          <MoreHoriz sx={{ ml: "auto", fontSize: 20 }} />
        </Box>

        {/* Post image - SAME SIZE as step 1 */}
        <Box
          sx={{
            height: 320,
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
            px: 3,
            py: 1.5,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              onClick={() => setState((prev) => ({ ...prev, liked: !prev.liked }))}
              sx={{
                color: state.liked ? "#ff3040" : "white",
                transition: "all 0.2s ease",
                p: 0.5,
              }}
            >
              {state.liked ? <Favorite sx={{ fontSize: 20 }} /> : <FavoriteBorder sx={{ fontSize: 20 }} />}
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <ChatBubbleOutline sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <Send sx={{ fontSize: 20 }} />
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
            {state.bookmarked ? <Bookmark sx={{ fontSize: 20 }} /> : <BookmarkBorder sx={{ fontSize: 20 }} />}
          </IconButton>
        </Box>

        {/* Likes count */}
        <Box sx={{ px: 3, py: 1.5, bgcolor: "#000", color: "white" }}>
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
              py: 1,
              borderBottom: "1px solid #333",
            }}
          >
            <Box
              sx={{
                width: 40,
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
              py: 2,
              borderBottom: "1px solid #333",
            }}
          >
            <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
              Comments
            </Typography>
          </Box>

          {/* Comments list */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 3,
              py: 1,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari, Edge
              msOverflowStyle: "none", // IE and Edge
            }}
          >
            {/* Sample comment with trigger keyword */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                py: 2,
                color: "white",
              }}
            >
              <Avatar sx={{ width: 32, height: 32, mr: 2 }}>U</Avatar>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    username
                  </Typography>
                  <Typography variant="caption" color="grey.400">
                    2m
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
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
                  p: 0.5,
                }}
              >
                {state.commentLiked ? <Favorite sx={{ fontSize: 18 }} /> : <FavoriteBorder sx={{ fontSize: 18 }} />}
              </IconButton>
            </Box>
          </Box>

          {/* Emoji reactions bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              py: 1.5,
              borderTop: "1px solid #333",
              borderBottom: "1px solid #333",
            }}
          >
            {EMOJI_REACTIONS.slice(0, 6).map((emoji, index) => (
              <Box
                key={index}
                sx={{
                  fontSize: "20px",
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
              px: 3,
              py: 1.5,
              borderTop: "1px solid #333",
            }}
          >
            <Avatar sx={{ width: 28, height: 28, mr: 1.5 }}>Y</Avatar>
            <Box
              sx={{
                flex: 1,
                bgcolor: "#222",
                borderRadius: 5,
                px: 2,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                border: "1px solid #333",
              }}
            >
              <Typography variant="body2" color="grey.400" sx={{ flex: 1 }}>
                Add a comment for {selectedPostData.username}...
              </Typography>
              <EmojiEmotions sx={{ fontSize: 18, color: "grey.400" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#0095f6",
                ml: 1.5,
                cursor: "pointer",
                fontWeight: 600,
                "&:hover": { opacity: 0.7 },
              }}
            >
              Post
            </Typography>
          </Box>
        </Box>

        {/* Home indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 134,
            height: 5,
            bgcolor: "white",
            borderRadius: "3px",
            opacity: 0.6,
          }}
        />
      </Box>
    )
  }

  if (state.currentStep === 2) {
    return (
      <Box
        sx={{
          width: 320,
          height: 690,
          bgcolor: "#000",
          borderRadius: 8,
          overflow: "hidden",
          position: "relative",
          opacity: state.isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          border: "8px solid #1a1a1a",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 30,
            bgcolor: "#000",
            borderRadius: "0 0 20px 20px",
            zIndex: 10,
          },
        }}
      >
        {/* Dynamic Island */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 30,
            bgcolor: "#000",
            borderRadius: "20px",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "#333",
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 8,
              bgcolor: "#333",
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* Status bar */}
        <Box
          sx={{
            height: 50,
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            pt: 2,
            color: "white",
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            1:37
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
              <Box sx={{ width: 4, height: 4, bgcolor: "white", borderRadius: "50%" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 1 }}>
              <Box sx={{ width: 20, height: 12, border: "1px solid white", borderRadius: 2 }} />
              <Typography variant="caption">100%</Typography>
            </Box>
          </Box>
        </Box>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 1,
            bgcolor: "#000",
            color: "white",
          }}
        >
          <ArrowBack sx={{ fontSize: 20 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ width: 28, height: 28 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {selectedPostData.username}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Phone sx={{ fontSize: 20 }} />
            <VideoCall sx={{ fontSize: 20 }} />
          </Box>
        </Box>

        {/* Messages */}
        <Box sx={{ flex: 1, px: 3, py: 2, bgcolor: "#000", height: 480, overflowY: "auto" }}>
          {/* Received message (bot message) */}
          {state.dmEnabled && state.dmMessage && (
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  bgcolor: "#333",
                  color: "white",
                  p: 2,
                  borderRadius: 3,
                  maxWidth: "80%",
                  fontSize: "14px",
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
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  bgcolor: "#333",
                  color: "white",
                  p: 1.5,
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
                    fontSize: "13px",
                    py: 1,
                    px: 2,
                    transition: "all 0.2s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  Send me the link
                </Button>
              </Box>
            </Box>
          )}

          {/* User's response (sent message) */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
            <Box
              sx={{
                bgcolor: "#0084ff",
                color: "white",
                p: 2,
                borderRadius: 3,
                maxWidth: "80%",
                fontSize: "14px",
              }}
            >
              Send me the link
            </Box>
          </Box>

          {/* Bot's link message */}
          {state.linkMessage && (
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  bgcolor: "#333",
                  color: "white",
                  p: 2,
                  borderRadius: 3,
                  maxWidth: "80%",
                  fontSize: "14px",
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
            px: 3,
            py: 1.5,
            bgcolor: "#000",
            borderTop: "1px solid #333",
          }}
        >
          <Avatar sx={{ width: 28, height: 28, mr: 1.5 }}>{selectedPostData.username.charAt(0).toUpperCase()}</Avatar>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#333",
              borderRadius: 5,
              px: 2,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="body2" color="grey.400" sx={{ flex: 1 }}>
              Message...
            </Typography>
            <CameraAlt sx={{ fontSize: 16, color: "grey.400" }} />
            <Mic sx={{ fontSize: 16, color: "grey.400" }} />
            <EmojiEmotions sx={{ fontSize: 16, color: "grey.400" }} />
          </Box>
        </Box>

        {/* Home indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 134,
            height: 5,
            bgcolor: "white",
            borderRadius: "3px",
            opacity: 0.6,
          }}
        />
      </Box>
    )
  }

  return null
}
