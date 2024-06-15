var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/yuhao-08/wcm2024 網站: https://yuhao-08.github.io/wcm2024/ 簡報: https://yuhao-08.github.io/wcm2024/reveal/a> 網誌: https://yuhao-08.github.io/wcm2024/blog/","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統1 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"},{"title":"w13課程整理","text":"w13 1.guess_game.7z 是在 AI 輔助下, 將簡單的單人 Brython 線上猜數字遊戲 轉化為可以多人同場比賽猜數字的線上遊戲. 2.由於使用 Flask, 直接啟動模式僅用於程式開發, 若要部署在 Windows 或 Linux 電腦上, 還需進行下列考量","tags":"w13","url":"./w13課程整理.html"},{"title":"w1課程整理","text":"w1 1.網際內容管理課程學員上課時必須登入Teams 中上課, 一邊觀看教學示範, 一邊自行操作. 2.網際內容管理課程的 MS 團隊代碼: ry8vdyo 3.登入 Github -連接至 https://github.com/mdecycu/cmsimde_site-建立個人的 wcm2024 倉儲。","tags":"w1","url":"./w1課程整理.html"},{"title":"w2課程整理","text":"w2 1.主要是利用Codespaces維護網站，每天平均僅能使用兩個小時。 2.採用 Github Codespaces 維護網站的好處是介面提供多終端機與多 ports 開啟功能。","tags":"w2","url":"./w2課程整理.html"},{"title":"w3課程整理","text":"w3 ① 利用github classroom來分組 ② git 的用法 ③ 利用Codespaces維護分組網站及網頁","tags":"w3","url":"./w3課程整理.html"},{"title":"w4課程整理","text":"w4 ①複習w3的內容 ②需下載main2.txt 和static.txt 在倉儲中建立兩個檔案 ③只要在 Shell 執行 python3 main2.py---執行靜態 python3 main.py ---執行動態 ctrl + c, c 代表 cancle 也就是取消 ④replit分組倉儲權限必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號), 其中的 config 內容為: 1 2 3 Host github.com User git Hostname github.com","tags":"w4","url":"./w4課程整理.html"},{"title":"w5課程整理","text":"w5 1.複習w3的分組倉儲權限設定影片","tags":"w5","url":"./w5課程整理.html"},{"title":"w6課程整理","text":"A. git 的發展歷史 2005 年：Git 誕生。 Linus Torvalds 建立Git，並在Linux 核心開發中開始使用它。 2005 年：首個公開發布。 2006 年：引進GitHub。 廣泛的使用情境。 2007 年：Git 1.5 發布。這個版本引入了一些重要的特性，包括git-config等指令，以及git-svn工具。 2008 年：Git 1.6 發布。此版本引入了git-clone命令的改進，以及git-rerere工具用於解決衝突。 2009 年：Git 1.6.3 發布。這個版本引入了git bisect指令，用於二分查找引入Bug 的提交。 2012 年：Git 1.8 發布。這個版本引入了git-merge和git-push的改進，以及對子模組的改進。 2014 年：Git 2.0 發布。這個版本引入了一些重大變化，包括預設使用push.default = simple 和預設情況下移除git submodule 中的.gitmodule 檔案。 2016 年：Git 2.10 發布。這個版本引入了多種新特性，包括改進的git rebase，新的git worktree命令等。 2018 年：Git 2.19 發布。這個版本引入了git switch和git restore命令，用於替代git checkout。 2020 年：Git 2.29 發布。這個版本引入了git sparse-checkout命令，允許使用者只檢出倉庫的一部分文件。 2022 年：仍在進行中 B.創作人的相關履歷 1.Git 的創辦人是Linus Torvalds，他是一位著名的電腦程式設計師，同時也是Linux 核心的創作者 2.經歷： Linux 核心開發者（1991年至今） ⓵創建並領導Linux 核心項目，負責開發和維護Linux 核心。 ②吸引了全球數千名開發者的參與，使Linux 成為最受歡迎的開源作業系統之一。 ③建立Git 分散式版本控制系統，並在Linux 核心開發中開始使用它。 ④為了解決Linux 核心開發過程中遇到的問題，例如處理大規模程式碼庫和多人協作等，而設計了Git。 C. git 解決內容管理問題 1.對於一般的專業人士，無論是軟體開發者、寫作者、設計師或其他領域的從業者，Git 都可以作為一個強大的工具來解決內容管理問題 ①版本控制: 使用Git 可以輕鬆追蹤檔案的變更歷史，從而方便回溯到先前的版本。 ②協作合作: 多人協作時，Git 提供了分支和合併的功能，可以讓團隊成員在不干擾彼此的情況下並行工作。 ③備份與同步: 使用Git 可以輕鬆地將檔案備份到遠端倉庫，並確保資料的安全性和可靠性。 ④程式碼審查與回饋: Git 提供了程式碼審查工具，團隊成員可以透過提交程式碼並要求審查來進行程式碼品質控制 ⑤專案管理: Git 倉庫可以與專案管理工具（如Jira、Trello等）集成，幫助團隊追蹤任務、問題和進度，提高專案管 理的效率和透明度。","tags":"w6","url":"./w6課程整理.html"},{"title":"小遊戲設計","text":"小遊戲設計 1.先利用Chat GPT問程式 2程式碼如下: import random def get_user_choice(): choices = ['剪刀', '石頭', '布'] while True: user_choice = input(\"請輸入你的選擇（剪刀、石頭、布）：\") if user_choice in choices: return user_choice else: print(\"無效的選擇，請重新輸入。\") def get_computer_choice(): choices = ['剪刀', '石頭', '布'] return random.choice(choices) def determine_winner(user_choice, computer_choice): if user_choice == computer_choice: return \"平手！\" elif (user_choice == '剪刀' and computer_choice == '布') or \\ (user_choice == '石頭' and computer_choice == '剪刀') or \\ (user_choice == '布' and computer_choice == '石頭'): return \"你贏了！\" else: return \"你輸了！\" def play_game(): user_choice = get_user_choice() computer_choice = get_computer_choice() print(f\"你的選擇：{user_choice}\") print(f\"電腦的選擇：{computer_choice}\") result = determine_winner(user_choice, computer_choice) print(result) if name == \" main \": while True: play_game() play_again = input(\"你想再玩一次嗎？（輸入 'y' 繼續，其他鍵退出）：\") if play_again.lower() != 'y': break print(\"遊戲結束！感謝你的參與。\") 3.下載VS CODE 4.建立一個新的資料夾到桌面上 5.再建立一個名稱叫 \"rock_paper_scissors.py\"的程式庫讓程式可以正常運作 6.以下為影片連結 https://youtu.be/1YqDXv6QgGs 7.解釋程式 A: get_user_choice(): 獲取玩家的選擇並確保輸入有效。 get_computer_choice(): 隨機生成電腦的選擇。 determine_winner(): 根據玩家和電腦的選擇決定勝負。 play_game(): 執行一輪遊戲，並顯示結果。 main 程序循環：允許玩家多次進行遊戲，直到選擇退出。 B: 按下 F5 或選擇 Run -> Start Debugging(建立終端機) 來執行程式。","tags":"小遊戲設計","url":"./小遊戲設計.html"},{"title":"期中課程整理","text":"## 大綱 1.網際內容管理課程的英文名稱為 Web-based Content Management 2.網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中, 且讓使用者寄存在 Github 中, 只要能夠執行 Python 的雲端或近端環境都能開啟網頁編輯程式進行改版。 網頁上的 IDE 1.網頁上的 IDE（集成開發環境）是一種在網頁瀏覽器中運行的開發工具，通常用於網頁開發或輕量級的程式開發。這些工具提供了一個集成的開發環境，包括編輯器、語法高亮顯示、自動完成、調試器和版本控制等功能。 2.Replit、Codespaces 和 Gitpod 都是強大的在線開發環境，可以用來開發各種類型的程式，包括但不限於網頁、應用軟件、遊戲、數據科學和機器學習等。 AI 工具 1.AI 工具通過其強大的數據分析和模式識別能力，為我們提供了許多解決問題的新途徑，並在各個領域產生了深遠的影響。 自然語言處理：NLP 技術使得我們可以從大量的文本數據中提取信息、理解語義、進行情感分析等。這有助於搜索引擎優化、情感分析、智能客服等方面的應用。 計算機視覺：CV 技術使得計算機能夠理解和解讀圖像和視頻。這有助於圖像識別、人臉識別、自動駕駛、醫學影像分析等應用。 機器學習和深度學習：機器學習和深度學習技術被廣泛應用於預測分析、推薦系統、金融風險管理、健康監測、自然資源管理等方面。 自動化和智能助手：AI 工具使得我們可以開發自動化系統和智能助手，幫助我們自動處理瑣碎任務、提高工作效率，例如智能家居系統、智能辦公軟件等。 健康醫療：AI 工具在醫學領域中的應用包括疾病診斷、藥物研發、醫學影像分析、個性化治療等，有助於提高醫療服務的質量和效率。 2.總的來說，AI 工具通過其強大的數據分析和模式識別能力，為我們提供了許多解決問題的新途徑，並在各個領域產生了深遠的影響。 實作練習問題 1 打開Excel 2016。 依序點選「資料」 -> 「自文字/CSV」。 在彈出的檔案選擇對話框中，選擇你的.csv 檔案（例如: 5j_wcm2024_midterm.csv）。 Excel 會自動啟動「文字匯入精靈」。在嚮導中： 在第一個視窗中，確保「檔案起始行」是1，然後點選「下一步」。 在第二個視窗中，將檔案原始資料類型設為\"分隔符號\"，然後點選\"下一步\"。 在第三個視窗中，選擇合適的分隔符號（通常是逗號或製表符），然後點擊「下一步」。 在最後一個視窗中，點擊\"高級\"按鈕。 在彈出的\"高級文字導入設定\"對話框中，將\"文件原始編碼\"改為\"65001: Unicode (UTF-8)\"，然後點擊\"確定\"。 點選「完成」按鈕，Excel 會正確地匯入並顯示CSV 檔案內容。 7.wcm2024 課程中曾經提到可以利用舊的可攜 Python 程式環境建立新的 Python 可攜程式環境, 但該如何進行? 要建立新的可攜式 Python 程式環境，你可以遵循這些步驟： 1.下載新的可攜式 Python 發行版，例如 Anaconda 或 Miniconda。 2. 解壓縮下載的檔案到你想要的目錄。 3. 如果你想要將舊的程式庫和設定複製到新的環境，你可以執行以下步驟： - 在舊的環境中使用 pip freeze > requirements.txt 命令將所有安裝的套件列在一個文件中。 - 將該文件複製到新的環境。 - 在新的環境中使用 pip install -r requirements.txt 命令安裝所有套件。 4. 如果你想要完全複製舊的環境，包括 Python 版本和所有套件，你可以嘗試將整個舊的程式目錄複製到新的位置。 這些步驟應該能幫助你建立一個新的可攜式 Python 程式環境。 8.建立一個掃地機器人的工作模擬系統需要以下步驟： 了解 Brython：Brython 是一個將 Python 代碼直譯成 JavaScript 的工具，可以讓你在網頁中運行 Python 代碼。 編寫掃地機器人的模擬程式：使用 Python 編寫模擬掃地機器人的程式碼，包括控制機器人移動、偵測障礙物、清潔地板等功能。 建立網頁：在 HTML 中嵌入 Brython，以便在網頁中執行 Python 代碼。你需要將 Brython 的相關檔案引入到你的 HTML 文件中。 將 Python 代碼嵌入到網頁中：在網頁中添加你編寫的 Python 代碼，並使用 Brython 來執行這些代碼。 設計控制介面：在網頁中添加控制掃地機器人的介面，例如按鈕來啟動/停止機器人、調整機器人的速度等。","tags":"期中課程整理","url":"./期中課程整理.html"}]};