
from django.shortcuts import render

from result import views

def home(request):
    return render(request, 'lotto.html')


def default(request):
  return render(request, 'descript.html')
# Create your views here.
