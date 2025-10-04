// src/styles.js
const styles = {
  app: {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  boxSizing: 'border-box',
  overflowX: 'hidden'
},
container: {
  flexGrow: 1,
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
  boxSizing: 'border-box'
},
  header: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1.5rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  headerTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: 0
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '2px solid rgba(255,255,255,0.2)',
    paddingBottom: '0.5rem'
  },
  navButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: 'white',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s',
    fontWeight: '500'
  },
  navButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '2px solid white'
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '2px solid #e5e7eb'
  },
  tab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'white',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '2px solid #e5e7eb',
    borderRadius: '8px 8px 0 0',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#6b7280',
    transition: 'all 0.2s',
    position: 'relative',
    top: '2px'
  },
  tabActive: {
    color: '#2563eb',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '3px solid #2563eb',
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.2s',
    cursor: 'pointer'
  },
  cardHover: {
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transform: 'translateY(-2px)'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  cardSubtitle: {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '1rem'
  },
  cardDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.5rem'
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  buttonSecondary: {
    backgroundColor: '#e5e7eb',
    color: '#374151'
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed'
  },
  uploadArea: {
    borderTop: '2px dashed #cbd5e1',
    borderRight: '2px dashed #cbd5e1',
    borderLeft: '2px dashed #cbd5e1',
    borderBottom: '2px dashed #cbd5e1',
    borderRadius: '8px',
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  uploadAreaActive: {
    borderTop: '2px dashed #2563eb',
    borderRight: '2px dashed #2563eb',
    borderLeft: '2px dashed #2563eb',
    borderBottom: '2px dashed #2563eb',
    backgroundColor: '#eff6ff'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  tableHeader: {
    backgroundColor: '#f3f4f6',
    padding: '1rem',
    textAlign: 'left',
    fontWeight: '600',
    color: '#374151',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  tableCell: {
    padding: '1rem',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '1px solid #e5e7eb',
    color: '#1f2937'
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    marginRight: '0.5rem',
    marginBottom: '0.5rem'
  },
  badgePrimary: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    color: '#6b7280'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#374151'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderTop: '1px solid #d1d5db',
    borderRight: '1px solid #d1d5db',
    borderLeft: '1px solid #d1d5db',
    borderBottom: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    borderTop: '1px solid #d1d5db',
    borderRight: '1px solid #d1d5db',
    borderLeft: '1px solid #d1d5db',
    borderBottom: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '1rem',
    minHeight: '120px',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  }

};

export { styles };

