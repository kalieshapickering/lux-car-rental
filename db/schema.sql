CREATE DATABASE IF NOT EXISTS quantum_db;
USE quantum_db;

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (req_loc VARCHAR(255) DEFAULT "error", sent_ts VARCHAR(15) NOT NULL, recieved_ts VARCHAR(15) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) DEFAULT "not provided", email VARCHAR(255) NOT NULL, phone VARCHAR(11) NOT NULL, vehicle VARCHAR(50) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL);
-- DATE type follows the format YYYY-MM-DD
