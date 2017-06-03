#coding:utf-8
from django.template.response import TemplateResponse

from django.http import HttpResponse
from django.views.decorators.clickjacking import xframe_options_exempt
import json

# Create your views here.
@xframe_options_exempt
def get(request):
    response_data = {"result":"我是来自跨域的结果"}
    response_data = json.dumps(response_data)
    print response_data
    t = TemplateResponse(request, 'data.html', {"data":response_data})
    return t.render()

