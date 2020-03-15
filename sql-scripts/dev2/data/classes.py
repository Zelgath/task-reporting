from datetime import date

class Location:
    def __init__(self, description, city, street, postal, country):
        self.description = description
        self.city = city
        self.street = street
        self.postal = postal
        self.country = country
    def print_to_string(self):
        print ("description: " + self.description + "\ncity: " + self.city + "\nstreet: " + self.street +
               "\npostal: " + self.postal + "\ncountry: " + self.country)

class Department:
    def __init__(self, description, id_manager):
        self.description = description
        self.id_manager = id_manager
    def print_to_string(self):
        print("description: " + self.description + "\nid_manager: " + self.id_manager)

class Grade:
    def __init__(self, description, min_salary, max_salary):
        self.description = description
        self.min_salary = min_salary
        self.max_salary = max_salary
    def print_to_string(self):
        print("description: " + self.description + "\nmin_salary: " + self.min_salary + "\nmax_salary: " + self.max_salary)

class Project:
    def __init__(self, description, client, monthly_cost, start_date, end_date, total_cost):
        self.description = description
        self.client = client
        self.monthly_cost = monthly_cost
        self.start_date = start_date
        self.end_date = end_date
        self.total_cost = total_cost
    def print_to_string(self):
        print("description: " + self.description + "\nclient: " + self.client + "\nmonthly_cost: " + self.monthly_cost +
              "\nstart_date: " + self.start_date + "\nend_date: " + self.end_date + "\ntotal_cost: " + self.total_cost)

class Job:
    def __init__(self, description):
        self.description = description
    def print_to_string(self):
        print("description: " + self.description)

class Manager:
    def __init__(self, id_employee):
        self.id_employee = id_employee
    def print_to_string(self):
        print("employee_id: " + self.id_employee)

class Contract:
    def __init__(self, type, start_date, end_date, id_grade, salary_factor, id_employee):
        self.type = type
        self.start_date = start_date
        self.end_date = end_date
        self.id_grade = id_grade
        self.salary_factor = salary_factor
        self.id_employee = id_employee
    def print_to_string(self):
        print("type: " + self.type + "\nstart_date: " + self.start_date + "\nend_date: " + self.end_date +
              "\nid_grade: " + self.id_grade + "\nsalary_factor: " + self.salary_factor + "\nid_employee: " + self.id_employee)

class Employee:
    def __init__(self, first_name, last_name, email, phone_number, id_job, id_location, id_contract_active, id_manager,
                 id_department, id_grade, is_manager, is_officer, is_active, id_project_1, id_project_2, id_project_3,
                 id_project_4, id_project_5):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email + "@company.com"
        self.phone_number = phone_number
        self.id_job = id_job
        self.id_location = id_location
        self.id_contract_active = id_contract_active
        self.id_manager = id_manager
        self.id_department = id_department
        self.id_grade = id_grade
        self.is_manager = is_manager
        self.is_officer = is_officer
        self.is_active = is_active
        self.id_project_1 = id_project_1
        self.id_project_2 = id_project_2
        self.id_project_3 = id_project_3
        self.id_project_4 = id_project_4
        self.id_project_5 = id_project_5
    def print_to_string(self):
        print("first_name: " + self.first_name + "\nlast_name: " + self.last_name + "\nemail: " + self.email +
              "\nphone_number: " + self.phone_number + "\nid_job: " + self.id_job + "\nid_location: " + self.id_location +
              "\nid_contract_active: " + self.id_contract_active + "\nid_manager: " + self.id_manager +
              "\nid_department: " + self.id_department + "\nid_grade: " + self.id_grade + "\nis_manager: " + self.is_manager +
              "\nis_officer: " + self.is_officer + "\nis_active: " + self.is_active + "\nid_project_1: " + self.id_project_1 +
              "\nid_project_2: " + self.id_project_2 + "\nid_project_3: " + self.id_project_3 + "\nid_project_4: " +
              self.id_project_4 + "\nid_project_5: " + self.id_project_5)
