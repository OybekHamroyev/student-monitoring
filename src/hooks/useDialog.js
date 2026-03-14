import { useSelector, useDispatch } from 'react-redux';
import { openDialog, closeDialog, toggleDialog } from '@/store/slices/dialogs';
export function useDialog(dialogName) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.dialogs.openDialogs[dialogName] || false);
    return {
        isOpen,
        open: () => dispatch(openDialog(dialogName)),
        close: () => dispatch(closeDialog(dialogName)),
        toggle: () => dispatch(toggleDialog(dialogName)),
    };
}
