# Race to the Moon

Arcade-Racer im Browser – spielbar unter **https://magicfhf.github.io/Race-to-the-Moon/**

Jeder Push auf `main` veröffentlicht das Spiel automatisch über GitHub Pages (`.github/workflows/pages.yml`).

## Konto & Cloud-Spielstand (Firebase)

Spieler können sich mit **E-Mail + Passwort** oder **Google** anmelden. Der Spielstand wird dann
automatisch in der Cloud gespeichert und auf allen Geräten synchronisiert. Ohne Anmeldung bleibt
alles wie bisher im Browser (localStorage). Einstellungen (Touch, Sound, Schatten) bleiben pro Gerät.

### Einmalige Einrichtung

1. Auf <https://console.firebase.google.com> ein Projekt anlegen (Google Analytics nicht nötig).
2. **Authentication** → *Jetzt starten* → unter *Anmeldemethode* aktivieren:
   - **E-Mail-Adresse/Passwort**
   - **Google** (Support-E-Mail auswählen)
3. **Authentication → Einstellungen → Autorisierte Domains** → `magicfhf.github.io` hinzufügen.
4. **Firestore Database** → *Datenbank erstellen* (Produktionsmodus, Standort z. B. `eur3`).
   Danach unter **Regeln** den Inhalt von [`firestore.rules`](firestore.rules) einfügen und *Veröffentlichen*.
5. **Projekteinstellungen → Allgemein → Meine Apps** → Web-App (`</>`) hinzufügen und die angezeigte
   `firebaseConfig` in [`firebase-config.js`](firebase-config.js) eintragen, committen und pushen.

Die Werte in `firebase-config.js` sind nicht geheim; der Schutz erfolgt über die Firestore-Regeln
(jeder Spieler kann nur seinen eigenen Spielstand unter `saves/{uid}` lesen und schreiben).

### Synchronisierung

- Erste Anmeldung: Ist die Cloud leer, wird der lokale Stand hochgeladen. Ist das Gerät leer, wird der Cloud-Stand geladen.
- Wurden sowohl lokal als auch in der Cloud (auf einem anderen Gerät) Änderungen gemacht, fragt das Spiel, welcher Stand behalten werden soll.
- Danach wird jede Änderung nach ein paar Sekunden automatisch hochgeladen.
