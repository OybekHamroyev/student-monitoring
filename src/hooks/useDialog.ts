import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { openDialog, closeDialog, toggleDialog } from '@/store/slices/dialogs'

export function useDialog(dialogName: string) {
  const dispatch = useDispatch<AppDispatch>()
  const isOpen = useSelector((state: RootState) => state.dialogs.openDialogs[dialogName] || false)

  return {
    isOpen,
    open: () => dispatch(openDialog(dialogName)),
    close: () => dispatch(closeDialog(dialogName)),
    toggle: () => dispatch(toggleDialog(dialogName)),
  }
}
