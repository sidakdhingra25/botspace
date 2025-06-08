import type React from "react"
export interface DemoPost {
  id: number
  image: string
  title: string
  username: string
  caption: string
  likes: number
  comments: number
}

export interface WorkflowState {
  currentStep: number
  selectedPost: string
  selectedPostId: number
  commentKeyword: string
  commentType: string
  dmEnabled: boolean
  dmMessage: string
  linkMessage: string
  showAllPosts: boolean
  liked: boolean
  bookmarked: boolean
  commentLiked: boolean
  isAnimating: boolean
  mounted: boolean
}

export interface StepProps {
  state: WorkflowState
  setState: React.Dispatch<React.SetStateAction<WorkflowState>>
  demoPosts: DemoPost[]
}
