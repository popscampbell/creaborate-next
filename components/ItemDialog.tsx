import { Button } from "@aws-amplify/ui-react"
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"

export default function ItemDialog<T>(props: {
  open: boolean
  onCancel: () => void
  onSaved: () => void
  children: any
  title: string
}) {
  const { open, onCancel, onSaved, children, title } = props

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSaved()}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}