from os import abort
from flask import Flask, render_template, url_for, session, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
# from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.sql.expression import false

import database_sqlite, database_setup 
#-------------------- Globals----------------------------------------
sql_alchemy=True
#------------------------------------------------------------
def switch_method(mthd, tid=''):
    # print(f'req type is ** {mthd} ** and tid is ** {tid} **')
    switcher={
        'post': create, 
        'patch': update,
        'delete': delete
    }
    func = switcher.get(mthd,  get_all)
    # print(f'********** method is {mthd}================')
    if tid=='':
        # print(f'exec {func.__name__}()')
        return func()
    else:
        # print(f'exec {func.__name__}({tid})')
        return func(tid)
    #---------------------------------------------------------------------------
def get_req():
    req = request.method.lower()
    return req


def get_all():
    print('Get all')
    if sql_alchemy:
        todo_list = database_setup.TODO.select_all()
    else:
        todo_list = database_sqlite.get_all()
    

    return jsonify([t.format() for t in todo_list])
    #return render_template('index.html', data = todo_list)

def create():
    print('create todo')
    body = request.get_json()
    # print(body)    
    name = body.get("name", None)
    content=body.get("content", None)
    if sql_alchemy:
        last_id = database_setup.TODO.insert(database_setup.TODO(None, name, content))
    else:
        last_id = database_sqlite.add_task(name, content)

    return jsonify({
        'success':True,
        'status':200,
        'todo':{
            'id': last_id, 
            'name': name, 
            'content': content
            }
    })

def update(task_id):
    print('update todo')

    body = request.get_json()
    # print(body)
    
    name = body.get("name", None)
    cont = body.get("content", None)
    prog = body.get("prog", 0)
    
    if sql_alchemy:
        todo = database_setup.TODO.query.get(task_id)
        try:
            todo.name = name
            todo.content = cont
            todo.prog  = prog
            database_setup.TODO.update(todo)
        except:
            abort(500)
    else:
        database_sqlite.update(task_id, name, cont, prog)
    return jsonify({
        'msg': 'update',
        'body': body
    })

def delete(task_id):
    print('delete todo')
    if sql_alchemy:
        database_setup.TODO.delete(database_setup.TODO.query.get(task_id))
    else:
        database_sqlite.delete(task_id)
    return jsonify({
        'status': 200, 
        'success': True, 
        'body': {
            'id': task_id
        }
    })