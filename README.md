# Medi Care

Medi Care is a user-friendly medical website offering accessible and trustworthy information on common health issues. Our goal is to provide individuals with a reliable resource to better understand and address their health concerns.

## Features

- Simple and intuitive design
- Comprehensive coverage of prevalent health issues
- Symptom checker tool
- Transparent attribution of sources
- Guidance on locating nearby healthcare providers

## Installation

### Prerequisites

- Node.js
- npm
- Python 3.8+
- MySQL
- Docker
- Heroku CLI

### Setup

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/yourusername/medi-care.git
    cd medi-care
    ```

2. **Backend Setup**:

    ```sh
    cd backend
    python -m venv env
    source env/bin/activate   # On Windows use `env\Scripts\activate`
    pip install -r requirements.txt
    uvicorn main:app --reload
    ```

3. **Frontend Setup**:

    ```sh
    cd frontend
    npm install
    npm start
    ```

4. **Database Setup**:

    - Ensure MySQL is running and create a database.
    - Update database connection settings in the FastAPI configuration.

5. **Docker Setup**:

    ```sh
    docker-compose up --build
    ```

## Usage

- **Start Backend**:

    ```sh
    uvicorn main:app --reload
    ```

- **Start Frontend**:

    ```sh
    npm start
    ```

- **Access the Application**:

    Open your web browser and navigate to `http://localhost:3000`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m "Description of changes"`).
5. Push to your fork (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

