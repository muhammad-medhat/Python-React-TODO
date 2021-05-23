from os import abort
from flask import Flask, render_template, url_for, session, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
# from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import false
from flask_migrate import Migrate



import database_sqlite, database_setup 
import sys 
import sqlite3
import functions as fns

app = Flask(__name__)
database_setup.setup_db(app)
# print(dir(app))
# database_setup.db_drop_and_create_all()



@app.route('/todos', methods=['get', 'POST'])
def add_task():
    req = fns.get_req()
    return fns.switch_method(req)

@app.route("/todos/<task_id>", methods=['delete', 'patch'])
def process(task_id):
    # print(fns.get_req())
    req = fns.get_req()
    return fns.switch_method(req, task_id)

        

# @app.route("/todos/<task_id>/edit", methods=['patch'])
# def update_todos(task_id):
#     req = fns.get_req()
#     return fns.switch_method(req, task_id)

if __name__ == '__main__':
    app.run(debug=True)