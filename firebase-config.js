// Firebase-Konfiguration für Konto-Login & Cloud-Spielstand.
// Werte aus der Firebase-Konsole einfügen: Projekteinstellungen → Allgemein → "Meine Apps" → Web-App → Konfiguration.
// Diese Werte sind nicht geheim – der Schutz erfolgt über die Firestore-Regeln (firestore.rules).
// Solange apiKey leer ist, läuft das Spiel ohne Konto (nur lokaler Speicherstand).
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBYl8913um2B6p5JWbMYiLxzx_SkbTSvjA',
  authDomain: 'login-af0af.firebaseapp.com',
  projectId: 'login-af0af',
  storageBucket: 'login-af0af.firebasestorage.app',
  messagingSenderId: '1073099294984',
  appId: '1:1073099294984:web:db73284f4b6fa8561dc4bd'
};
