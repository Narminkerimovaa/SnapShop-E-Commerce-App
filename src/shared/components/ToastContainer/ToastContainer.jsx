import { useToast } from '@/context/ToastContext';
import Toast from '@/shared/components/Toast/Toast';
import styles from './ToastContainer.module.css';

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className={styles.container} role="region" aria-label="Bildirişlər">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;