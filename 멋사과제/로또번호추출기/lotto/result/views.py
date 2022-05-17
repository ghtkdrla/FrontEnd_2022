from django.shortcuts import render
from myapp import templates
import random

#받은 데이터로 일련의 작업 후, 결과물을 가지고 결과창으로 이동
def calculate(request):
  if request.method == 'GET':
      count = request.GET['count']
      lot=[]
      list=[]
#전형적인 로또번호 추출 메커니즘
#sorting까지 해결(lot.sort())
      for i in range(int(count)):
         lot = random.sample(range(1,46),6)
         lot.sort()
         list.append(lot)
      data = {
         'data': count,
         'list': list
        }
      return render(request, 'result.html', data)


# Create your views here.
