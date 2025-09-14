# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 
    1) Functionality
    As a user of the application, I am able to decide whether I want to include column headers as the first row of my CSV, so I can provide more context on the data in the CSV.
    Acceptance Criteria:
        - The user can either include a header row, or not
        - The parser doesn't return the header row as an object if it is included

    2) Extensibility
    As a user of the application, I want to ensure my input is valid before parsing, so I can avoid errors during parsing.
    Acceptance Criteria:
        -The user receives an informative message if their input is ill-formatted
        -The parser is only run upon success after validation

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 


    3) Extensibility
    As a user, I want to specify a custom delimiter (like a semicolon), so that I can parse non-standard CSV files.
    Acceptance Criteria:
        -The parser takes in a delimiter option
        -The parsing logic follows that chosen delimiter

    4) Extensibility
    As a developer, I want to parse large CSV files efficiently, so my app doesn't run out of memory.
    Acceptance Criteria:
        - The parser can process files line-by-line or in chunks.
        - The API supports async iteration or callbacks for each row
    
    The first idea and second were my initial ones, and the LLM suggested modified versions of them as well. I ignored suggestions such as non-UTF8 encoded files and flexible input options (passing in something other than a file path). I noticed that before I tweaked the prompt, I was getting too many suggestions that deviated far from the original structure/intention of the parser.
### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project: 4 hrs
#### Link to GitHub Repo:  
