export const categories = {
  material: [
    {
      question: "Wie heißt dieses Element in Material Design?",
      element: `<div style="display: flex; justify-content: flex-start; margin: 32px 0;">
            <button style="background-color: #6750A4; border: none; color: white; width: 64px; height: 64px; border-radius: 16px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); font-size: 24px; display: flex; align-items: center; justify-content: center;">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" fill="white">
                <path d="M479.825 816Q467 816 458.5 807.625q-8.5-8.375-8.5-21.625v-130h-130q-12.667 0-20.083-8.375Q292 638.625 292 626t7.917-20q7.916-8 20.083-8h130v-130q0-13 8.625-21.5T480 438q13.225 0 21.612 8.625Q510 455.25 510 468v130h130q12.667 0 20.083 8.417Q668 614.833 668 627t-8 21q-8 8-20 8H510v130q0 13.225-8.625 21.612Q492.75 816 479.825 816Z"/>
              </svg>
            </button>
          </div>`,
      options: ["Floating Action Button", "Snackbar", "Bottom Navigation", "App Bar"],
      correct: 0,
      explanation: "Der Floating Action Button ist ein charakteristisches Element in Material Design."
    },
    {
      question: "Wie groß ist die Mindesthöhe für Buttons in Material Design?",
      element: "",
      options: ["44px", "48px", "56px", "64px"],
      correct: 1,
      explanation: "Die Mindesthöhe beträgt 48px laut den Material Design Richtlinien."
    },
    {
      question: "Welche Rolle spielt die Elevation im Material Design?",
      element: "",
      options: ["Schatten", "Farbton", "Form", "Animation"],
      correct: 0,
      explanation: "Die Elevation wird durch Schatten dargestellt, um die Hierarchie von Elementen zu verdeutlichen."
    },
    {
      question: "Welcher Farbakzent wird oft für Aktionsbuttons im Material Design verwendet?",
      element: "",
      options: ["Rot", "Gelb", "Blau", "Grün"],
      correct: 2,
      explanation: "Typischerweise wird Blau als Akzentfarbe verwendet."
    },
    // Weitere Material Design Fragen können hier ergänzt werden…
  ],
    hig: [
      {
        question: "Wie wird dieses Element in HIG genannt?",
        element: `<div style="display: flex; border: 1px solid #ccc; border-radius: 5px; overflow: hidden; margin: 32px 0;">
                    <button style="flex: 1; padding: 8px; background-color: #007AFF; color: white; border: none;">Option 1</button>
                    <button style="flex: 1; padding: 8px; background-color: white; color: #007AFF; border: none;">Option 2</button>
                  </div>`,
        options: ["Segmented Control", "Tab Bar", "Navigation Bar", "Action Sheet"],
        correct: 0,
        explanation: "Das Segmentierte Control wird in iOS verwendet, um zwischen verwandten Ansichten zu wechseln."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="border: 1px solid #ccc; border-radius: 12px; padding: 16px; background-color: #fff; width: 280px; margin: 32px 0; color: #000;">
                    <h3 style="margin: 0 0 8px 0; font-size: 18px;">Achtung</h3>
                    <p style="margin: 0 0 16px 0; font-size: 14px;">Dies ist eine Warnung.</p>
                    <button style="width: 100%; padding: 8px; background-color: #007AFF; color: white; border: none; border-radius: 6px;">OK</button>
                  </div>`,
        options: ["Alert", "Action Sheet", "Modal", "Popover"],
        correct: 0,
        explanation: "Ein Alert informiert den Nutzer über wichtige Informationen oder Warnungen."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="display: flex; align-items: center; justify-content: center; gap: 16px; padding: 12px 16px; background-color: #f7f7f7; border-bottom: 1px solid #ccc; margin: 32px 0; width: calc(160px - 32px);">
                    <button style="background: none; border: none; color: #007AFF; font-size: 16px;">Back</button>
                    <span style="font-size: 18px; font-weight: bold; color: #000;">Titel</span>
                    <button style="background: none; border: none; color: #007AFF; font-size: 16px;">Edit</button>
                  </div>`,
        options: ["Navigation Bar", "Toolbar", "Tab Bar", "Status Bar"],
        correct: 0,
        explanation: "Die Navigation Bar ist ein zentrales Element in iOS, das die App‑Navigation unterstützt."
      },         
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="margin: 32px 0; display: flex; justify-content: center;">
                    <img src="https://via.placeholder.com/360x640.png?text=iOS+Tab+Bar" alt="iOS Tab Bar Beispiel" style="max-width: 100%; border: 1px solid #ccc; border-radius: 8px;">
                  </div>`,
        options: ["Tab Bar", "Toolbar", "Segmented Control", "Navigation Bar"],
        correct: 0,
        explanation: "Die Tab Bar ist ein zentrales Navigationselement in iOS, das am unteren Rand des Bildschirms angezeigt wird."
      },                 
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="padding: 16px; background-color: #fff; border-top: 1px solid #ccc; margin: 32px 0;">
                    <select style="width: 100%; padding: 8px; font-size: 16px;">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>`,
        options: ["Picker", "Dropdown", "Segmented Control", "List"],
        correct: 0,
        explanation: "Ein Picker wird in iOS genutzt, um einen Wert aus einer Liste auszuwählen."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="padding: 16px; margin: 32px 0;">
                    <input type="range" style="width: 100%;">
                  </div>`,
        options: ["Slider", "Stepper", "Switch", "Progress Bar"],
        correct: 0,
        explanation: "Ein Slider ermöglicht es dem Nutzer, einen Wert innerhalb eines kontinuierlichen Bereichs zu wählen."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="padding: 16px; margin: 32px 0;">
                    <label style="display: flex; align-items: center;">
                      <span style="margin-right: 8px; font-size: 16px;">Option</span>
                      <input type="checkbox" style="width: 40px; height: 20px; accent-color: #007AFF;">
                    </label>
                  </div>`,
        options: ["Switch", "Toggle", "Checkbox", "Radio Button"],
        correct: 0,
        explanation: "In iOS wird ein Switch verwendet, um zwischen zwei Zuständen zu wechseln."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="display: flex; justify-content: center; gap: 4px; padding: 16px; margin: 32px 0;">
                    <div style="width: 8px; height: 8px; background-color: #007AFF; border-radius: 50%;"></div>
                    <div style="width: 8px; height: 8px; background-color: #8e8e93; border-radius: 50%;"></div>
                    <div style="width: 8px; height: 8px; background-color: #8e8e93; border-radius: 50%;"></div>
                  </div>`,
        options: ["Page Control", "Segmented Control", "Indicator", "Tab Bar"],
        correct: 0,
        explanation: "Page Control zeigt die aktuelle Seite in einer paginierten Ansicht an."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="padding: 16px; margin: 32px 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="animation: spin 1s linear infinite;" width="32" height="32" fill="#007AFF" viewBox="0 0 24 24">
                      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.46-.56 2.79-1.48 3.76l1.43 1.43C19.07 15.13 20 13.17 20 11c0-4.42-3.58-8-8-8z"/>
                      <style>
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                      </style>
                    </svg>
                  </div>`,
        options: ["Activity Indicator", "Progress Bar", "Spinner", "Loader"],
        correct: 0,
        explanation: "Ein Activity Indicator signalisiert dem Nutzer, dass eine Hintergrundaktion läuft."
      },
      {
        question: "Wie heißt dieses Element in HIG?",
        element: `<div style="position: fixed; bottom: 0; left: 0; right: 0; background-color: #fff; border-top-left-radius: 12px; border-top-right-radius: 12px; padding: 16px; margin: 32px 0;">
                    <button style="width: 100%; padding: 12px; margin-bottom: 8px; background-color: #007AFF; color: white; border: none; border-radius: 6px;">Option 1</button>
                    <button style="width: 100%; padding: 12px; background-color: #007AFF; color: white; border: none; border-radius: 6px;">Option 2</button>
                  </div>`,
        options: ["Action Sheet", "Alert", "Modal", "Popover"],
        correct: 0,
        explanation: "Ein Action Sheet präsentiert mehrere Optionen zur Auswahl am unteren Bildschirmrand."
      },
      {
        question: "Wie wird ein typischer Rückwärtsnavigationsbutton in HIG genannt?",
        element: "",
        options: ["Back Button", "Dismiss Button", "Cancel Button", "Action Button"],
        correct: 0,
        explanation: "In den Human Interface Guidelines wird der Rückwärtsnavigationsbutton als 'Back Button' bezeichnet."
      },
      {
        question: "Welches Icon wird häufig als Home-Icon in HIG verwendet?",
        element: `<div style="display: flex; justify-content: flex-start; margin: 32px 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ecf0f1" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>`,
        options: ["House", "Home", "Dashboard", "Start"],
        correct: 1,
        explanation: "Das 'Home'-Icon wird in HIG häufig verwendet, um den Startbildschirm darzustellen."
      },
      {
        question: "Welches UI-Element in HIG wird genutzt, um mehrere Optionen in einer Zeile darzustellen?",
        element: "",
        options: ["Segmented Control", "Picker", "Stepper", "Switch"],
        correct: 0,
        explanation: "Segmented Controls ermöglichen die Auswahl zwischen mehreren Optionen in einer Zeile."
      },
      {
        question: "Wie werden in HIG oft Warnmeldungen visuell hervorgehoben?",
        element: "",
        options: ["Durch Rot", "Durch Gelb", "Durch Grün", "Durch Blau"],
        correct: 0,
        explanation: "Warnungen werden in HIG oft in Rot dargestellt, um die Dringlichkeit zu unterstreichen."
      },
      {
        question: "Welcher Standard-Innenabstand (Padding) wird in HIG häufig verwendet?",
        element: "",
        options: ["8pt", "16pt", "24pt", "32pt"],
        correct: 1,
        explanation: "Ein Abstand von 16pt ist in vielen Fällen ein Standard gemäß HIG."
      },
      {
        question: "Was bedeutet der Begriff 'Safe Area' in HIG?",
        element: "",
        options: ["Ein Bereich, der frei bleibt", "Ein Bereich, der Inhalte vor Überlagerungen schützt", "Ein Bereich für Werbung", "Ein Bereich nur für iPad"],
        correct: 1,
        explanation: "Die Safe Area schützt Inhalte vor Überlappungen durch Notch oder System-UI."
      },
      {
        question: "Welche Interaktion wird in HIG typischerweise zum Schließen von Modalen verwendet?",
        element: "",
        options: ["Swipe nach unten", "Doppeltippen", "Langes Drücken", "Tippen auf den Hintergrund"],
        correct: 0,
        explanation: "Modale Ansichten in iOS können oft durch ein Herunterwischen geschlossen werden."
      },
      {
        question: "Welche haptische Rückmeldung wird in iOS häufig verwendet?",
        element: "",
        options: ["Vibration", "Akustisches Signal", "Visuelle Animation", "Keine Rückmeldung"],
        correct: 0,
        explanation: "Haptische Rückmeldungen in Form von leichten Vibrationen sind typisch für iOS."
      },
      {
        question: "Welche Gestik wird in HIG weniger genutzt, da sie durch modernere Technologien ersetzt wurde?",
        element: "",
        options: ["Swipe", "Force Touch", "Pinch", "Double Tap"],
        correct: 1,
        explanation: "Force Touch wurde in neueren iOS-Versionen weitgehend durch haptisches Feedback ersetzt."
      },
      {
        question: "Welche Farbe wird in iOS typischerweise als Standard-TintColor genutzt?",
        element: "",
        options: ["Rot", "Grün", "Blau", "Gelb"],
        correct: 2,
        explanation: "Der Standard-TintColor in iOS ist systemweit meist Blau."
      },
      {
        question: "Welche Schriftart wird in den Human Interface Guidelines für iOS-Apps empfohlen?",
        element: "",
        options: ["Helvetica Neue", "SF Pro", "Roboto", "Arial"],
        correct: 1,
        explanation: "Apple verwendet die Schriftart SF Pro, die speziell für iOS- und macOS-Systeme entwickelt wurde."
      },
      {
        question: "Welches UI-Element wird in HIG empfohlen, um Benutzeraktionen in einer App zu bestätigen?",
        element: "",
        options: ["Snackbar", "Alert", "Modal Sheet", "Toast"],
        correct: 1,
        explanation: "Alerts werden verwendet, um den Benutzer um Bestätigung einer wichtigen Aktion zu bitten."
      },
      {
        question: "Welches dieser Elemente wird in HIG als primäre Navigationsmethode empfohlen?",
        element: "",
        options: ["Tabs", "Side Drawer", "Floating Action Button", "Accordion"],
        correct: 0,
        explanation: "Tabs sind die bevorzugte Methode für die primäre Navigation in iOS-Apps."
      },
      {
        question: "Wie wird in HIG empfohlen, lange Texte in einer App anzuzeigen?",
        element: "",
        options: ["In einer Scroll View", "In einer modalen Ansicht", "Als separate Seiten", "In einem Tooltip"],
        correct: 0,
        explanation: "Scroll Views ermöglichen eine einfache Navigation durch lange Inhalte ohne unnötige Interaktionen."
      },
      {
        question: "Welche Interaktion wird in HIG empfohlen, um ein Menü zu öffnen?",
        element: "",
        options: ["Long Press", "Swipe nach rechts", "Tap auf ein Icon", "Pinch"],
        correct: 2,
        explanation: "In iOS ist es üblich, Menüs über einen Tap auf ein Icon zu öffnen."
      },
      {
        question: "Wie groß sollte laut HIG eine Touch-Fläche mindestens sein?",
        element: "",
        options: ["24x24 pt", "32x32 pt", "44x44 pt", "60x60 pt"],
        correct: 2,
        explanation: "Apple empfiehlt eine Mindestgröße von 44x44 pt, damit Buttons leicht zu tippen sind."
      },
      {
        question: "Wie sollten Schaltflächen in iOS-Apps laut HIG gestaltet sein?",
        element: "",
        options: ["Mit Schatten und 3D-Effekt", "Mit abgerundeten Ecken und flachem Design", "Mit Rahmen und Farbverlauf", "Ohne Farbe und als reiner Text"],
        correct: 1,
        explanation: "Apple empfiehlt abgerundete Ecken und ein flaches Design für ein modernes und intuitives Erlebnis."
      },
      {
        question: "Welches Farbschema wird in HIG für den Dark Mode empfohlen?",
        element: "",
        options: ["Grautöne mit hellblauen Akzenten", "Hoher Kontrast mit reinem Schwarz und Weiß", "Dunklere Hintergründe mit subtilen Farbverläufen", "Grünliche Töne für Augenfreundlichkeit"],
        correct: 2,
        explanation: "Apple empfiehlt dunklere Hintergründe mit subtilen Farbverläufen für eine angenehme Darstellung."
      },
      {
        question: "Wie nennt HIG das Konzept, dass Inhalte dynamisch an verschiedene Bildschirmgrößen angepasst werden sollen?",
        element: "",
        options: ["Adaptive Layouts", "Responsive Design", "Fluid Grids", "Dynamic Type"],
        correct: 0,
        explanation: "Adaptive Layouts passen sich intelligent an unterschiedliche Displaygrößen an."
      },
      {
        question: "Welche Interaktionsmethode wird in iOS-Apps zur Auswahl eines Datums empfohlen?",
        element: "",
        options: ["Textfeld mit manueller Eingabe", "Dropdown-Menü", "Date Picker", "Slider"],
        correct: 2,
        explanation: "Der Date Picker ist die bevorzugte Methode zur Auswahl eines Datums."
      }
    ]
  };