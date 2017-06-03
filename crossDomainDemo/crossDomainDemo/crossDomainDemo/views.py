#coding:utf-8
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.http import HttpResponse
import json  

def index(request):
    t = TemplateResponse(request, 'request.html', {})
    return t.render()

def ghost(request):

    return HttpResponse("")
