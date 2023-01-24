import { Urgency } from "../enums/enum"

export interface Tasks {
  id:number
  title: string
  description: string
  urgency: Urgency
  completed: boolean
}