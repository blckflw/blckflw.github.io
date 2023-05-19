    const typingText = document.getElementById('typing-text');
    const phrases = [
      'Student.',
      'Graphic Designer.',
      'Human Being.'
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        const currentText = currentPhrase.slice(0, letterIndex);

        typingText.textContent = currentText;

        if (!isDeleting) {
            if (letterIndex < currentPhrase.length) {
                letterIndex++;
            } else {
                isDeleting = true;
                // Pause at the end of the phrase
                setTimeout(typeText, 1500);
                return;
            }
        } else {
            if (letterIndex > 0) {
                letterIndex--;
            } else {
                isDeleting = false;
                phraseIndex++;
                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }
            }
        }

        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(typeText, typingSpeed);
    }

    typeText();

    var windowElement = document.getElementById("window");
    var initialX, initialY;
    var defaultPosition = {
        top: '70%',
        left: '50%'
    };

    windowElement.addEventListener("mousedown", function (event) {
        event.preventDefault();
        initialX = event.clientX - windowElement.offsetLeft;
        initialY = event.clientY - windowElement.offsetTop;

        document.addEventListener("mousemove", dragWindow);
        document.addEventListener("mouseup", stopDraggingWindow);
    });

    function dragWindow(event) {
        event.preventDefault();
        var x = event.clientX - initialX;
        var y = event.clientY - initialY;
        windowElement.style.left = x + "px";
        windowElement.style.top = y + "px";
    }

    function stopDraggingWindow() {
        document.removeEventListener("mousemove", dragWindow);
        document.removeEventListener("mouseup", stopDraggingWindow);

        windowElement.style.marginBottom = "0"; // Reset margin

        windowElement.style.transition = "left 0.3s, top 0.3s";
        windowElement.style.left = defaultPosition.left;
        windowElement.style.top = defaultPosition.top;

        setTimeout(function () {
            windowElement.style.transition = "";
        }, 300);
    }

    function changeTab(tabIndex) {
        var tabContents = document.getElementsByClassName("tab-content");
        var tabs = document.getElementsByClassName("tab");

        // Hide all tab contents
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active");
        }

        // Deactivate all tabs
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }

        // Show selected tab content
        var selectedTabContent = document.getElementById("tabContent" + tabIndex);
        selectedTabContent.classList.add("active");

        // Activate selected tab
        var selectedTab = document.getElementsByClassName("tab")[tabIndex - 1];
        selectedTab.classList.add("active");
    }

    window.addEventListener("load", function () {
        changeTab(1);
    });
