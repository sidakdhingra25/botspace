"use client"

import { useState, useEffect } from "react"
import type { WorkflowState } from "../types"
import { DEFAULT_DM_MESSAGE, DEFAULT_LINK_MESSAGE } from "../utils/constants"

export const useWorkflowState = () => {
  const [state, setState] = useState<WorkflowState>({
    currentStep: 0,
    selectedPost: "specific",
    selectedPostId: 1,
    commentKeyword: "Price",
    commentType: "specific",
    dmEnabled: true,
    dmMessage: DEFAULT_DM_MESSAGE,
    linkMessage: DEFAULT_LINK_MESSAGE,
    showAllPosts: false,
    liked: false,
    bookmarked: false,
    commentLiked: false,
    isAnimating: false,
    mounted: false,
  })

  // Safe mounting to prevent hydration issues
  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prev) => ({ ...prev, mounted: true }))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    if (state.currentStep < 2) {
      setState((prev) => ({ ...prev, isAnimating: true }))
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          currentStep: prev.currentStep + 1,
          isAnimating: false,
        }))
      }, 300)
    }
  }

  const handleBack = () => {
    if (state.currentStep > 0) {
      setState((prev) => ({ ...prev, isAnimating: true }))
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          currentStep: prev.currentStep - 1,
          isAnimating: false,
        }))
      }, 300)
    }
  }

  const handlePostSelect = (postId: number) => {
    setState((prev) => ({ ...prev, selectedPostId: postId }))
  }

  return {
    state,
    setState,
    handleNext,
    handleBack,
    handlePostSelect,
  }
}
