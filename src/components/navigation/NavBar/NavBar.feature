Feature: NavBar

    Scenario: Rendering the NavBar
        Given The app loads the NavBar page
        Then the NavBar shows

    Scenario: Rendering default slot
        Given The navbar recieves a default slot
        Then the navbar overwrites the left and right sections with the slot content

    Scenario: Rendering left slot
        Given when I pass content to the left slot
        Then the content is inserted into the left section

    Scenario: Rendering right slot
        Given when I pass content to the right slot
        Then the content is inserted into the right section
