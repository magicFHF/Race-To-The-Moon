// Firebase-Konfiguration für Konto-Login & Cloud-Spielstand.
// Werte aus der Firebase-Konsole einfügen: Projekteinstellungen → Allgemein → "Meine Apps" → Web-App → Konfiguration.
// Diese Werte sind nicht geheim – der Schutz erfolgt über die Firestore-Regeln (firestore.rules).
// Solange apiKey leer ist, läuft das Spiel ohne Konto (nur lokaler Speicherstand).
window.FIREBASE_CONFIG = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};
