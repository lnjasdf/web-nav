以下命令将把 datastore.xlsx 文件转换为 config/nav.json 文件

python xlsx2json.py

xlsx2json.py 脚本依赖 openpyxl 库，需要提前安装

datastore.xlsx 格式约定：
group_info 为分类信息，id以10001开始

tab_info 为分组信息，id以20001开始

site_info 为站点信息，id以50001开始