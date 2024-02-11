var store = [{
        "title": "Test1",
        "excerpt":"Welcome to WordPress.com. After you read this, you should delete and write your own post, with a new title above. Or hit Add New on the left (of the admin dashboard) to start a fresh post. Here are some suggestions for your first post. You can find new ideas for...","categories": ["Databases","Linux"],
        "tags": [],
        "url": "https://manios.org/2011/10/14/hello-world",
        "teaser": null
      },{
        "title": "Zip and UnZip in Java",
        "excerpt":"package com.ots.pocketpolice.sync; import java.io.BufferedOutputStream; import java.io.File; import java.io.FileInputStream; import java.io.FileOutputStream; import java.io.IOException; import java.io.InputStream; import java.util.Enumeration; import java.util.zip.ZipEntry; import java.util.zip.ZipFile; import java.util.zip.ZipOutputStream; /** * A convenience class that compresses and decompresses files to and from Zip * archives.&lt;/br&gt;Updated: 2012-01-19 09:54 * @author CManios * @version 1.0 */ public class Zipper...","categories": [],
        "tags": [],
        "url": "https://manios.org/2012/01/18/zip-and-unzip-in-java",
        "teaser": null
      },{
        "title": "Android get SQLite Library Version",
        "excerpt":"/** * get the version of the SQLite Library that is installed in the android * system * * @return version , for example 3.5.2 */ public String getSqliteLibraryVersion() { Cursor cursor = SQLiteDatabase.openOrCreateDatabase(\":memory:\", null) .rawQuery(\"select sqlite_version() AS sqlite_version\", null); String sqliteVersion = \"\"; while (cursor.moveToNext()) { sqliteVersion += cursor.getString(0);...","categories": ["Android","Databases"],
        "tags": ["android","database","library","sqlite"],
        "url": "https://manios.org/2012/02/22/android-get-sqlite-library-version",
        "teaser": null
      },{
        "title": "Object ArrayList Sort",
        "excerpt":"Let’s say we have a simple class called Person public class Person{ public String name; public int age; public Person(String name, int age) { this.name = name; this.age = age; } } If you want to create an ArrayList of Person objects and sort it by name you can do...","categories": ["Java"],
        "tags": ["arraylist","collection","java","object","sort"],
        "url": "https://manios.org/2012/02/28/object-arraylist-sort",
        "teaser": null
      },{
        "title": "Android External Storage Free Space",
        "excerpt":"Today I wanted to store some images to SD card and I wanted to find the available space: /** * Get the available free space in the external storage (usually SD card) * * @return the available space in gigabytes */ public double getExternalStorageFreeSpace() { StatFs stat = new StatFs(Environment.getExternalStorageDirectory().getPath());...","categories": ["Android","Java"],
        "tags": ["android","availabe","java","sd","space"],
        "url": "https://manios.org/2012/03/07/android-external-storage-free-space",
        "teaser": null
      },{
        "title": "Copy/Paste source code from Eclipse to Microsoft Word",
        "excerpt":"Today I wanted to copy and paste a piece of code from Eclipse Indigo to Microsoft Word 2007 and keep the syntax highlighting. In some cases it worked but in some other not. After searching in the webI found that if the area you want to copy has folded code...","categories": [],
        "tags": ["copy","eclipse","highlighting","microsoft","paste","source","syntax","word"],
        "url": "https://manios.org/2012/03/08/copypaste-source-code-from-eclipse-to-microsoft-word",
        "teaser": null
      },{
        "title": "Android MD5 password encryption",
        "excerpt":"Today I will show you how to generate the MD5 hash String for a given String in Android /** * function md5 encryption for passwords * * @param password * @return passwordEncrypted */ private static final String md5(final String password) { try { MessageDigest digest = java.security.MessageDigest .getInstance(\"MD5\"); digest.update(password.getBytes()); byte...","categories": ["Android","Java"],
        "tags": [],
        "url": "https://manios.org/2012/03/19/android-md5-password-encryption",
        "teaser": null
      },{
        "title": "Check Network connectivity and obtain Wifi MAC address in Android",
        "excerpt":"Updated: 2012-05-09 Today I wanted to check if my Android device is connected to a TCP/IP network. So I searched in the web for a while and I found this StackOverFlow answer on connectivity. public boolean isOnline() { ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo netInfo = cm.getActiveNetworkInfo(); if (netInfo !=...","categories": ["Android","Java"],
        "tags": ["address","android","card","connectivity","mac","network","wifi"],
        "url": "https://manios.org/2012/04/05/check-network-connectivity-in-android",
        "teaser": null
      },{
        "title": "Android Custom Dialogs Part 1: Set value",
        "excerpt":"No Content Found  ","categories": [],
        "tags": ["android","java"],
        "url": "https://manios.org/2012/05/07/android-custom-dialogs-part-1-set-value",
        "teaser": null
      },{
        "title": "Install Jboss 5.1.0.GA to  Windows 7",
        "excerpt":"Today I am going to show you how to install Jboss 5.1.0.GA on a Windows 7 machine. First of all download the binaries from http://www.jboss.org/jbossas/downloads/ The downloaded file is a zip is named jboss-5.1.0.GA-jdk6.zip. As you can see it is a zip archive and not an executable. Create an installation...","categories": ["Application Server","JBoss"],
        "tags": ["install","jboss","server","windows"],
        "url": "https://manios.org/2012/05/08/install-jboss-5-1-0-ga-to-windows-7",
        "teaser": null
      },{
        "title": "Bluetooth adapter device name and MAC address in Android",
        "excerpt":"Today I am going to show you how to get the bluetooth adapter device  name (if exists) and MAC address programmatically in Android. Note that this code will not work in emulator as it does not support bluetooth. To avoid a possible exception we check if mBluetoothAdapter==null in lines 09...","categories": ["Android","Java"],
        "tags": ["adapter","address","android","bluetooth","card","connectivity","mac","network"],
        "url": "https://manios.org/2012/05/09/bluetooth-adapter-device-name-and-mac-address-in-android",
        "teaser": null
      },{
        "title": "Android pre-populated Database",
        "excerpt":"Today I am going to show you how to create an android application which comes with a pre-populated database. The database file has to be stored in assets directory. Every file that is stored in Assets directory is compressed. Prior to Android 2.3, any compressed asset file with an uncompressed...","categories": ["Android","Databases"],
        "tags": ["android","asset","database","java","pre-populated"],
        "url": "https://manios.org/2012/05/14/android-pre-populated-database",
        "teaser": null
      },{
        "title": "Launch Logcat programmatically in Android",
        "excerpt":"Today I wanted to write logcat output to a file while my application is running. To do so I executed the following code: public void executeLogcat(){ File logFile = new File(\"/mnt/sdcard/arxeion.log\"); // log file name int sizePerFile = 60; // size in kilobytes int rotationCount = 10; // file rotation...","categories": ["Android","Java"],
        "tags": ["android","log","logcat","output"],
        "url": "https://manios.org/2012/05/15/check-network-connectivity-and-obtain-wifi-mac-address-in-android",
        "teaser": null
      },{
        "title": "Extend SQLiteOpenHelper as a singleton class in Android ",
        "excerpt":"Update: 2012-07-27 Today I wanted to keep my DatabaseHelper class unique and public in all my activities. Till now I kept creating and destroying a DatabaseHelper object for each Activity I was bringing in foreground. Thanks to Konstantinos Vaggelakos post (Database SQLiteOpenHelper singleton class for Android) I added the following...","categories": ["Android","Databases"],
        "tags": ["android","database","public","singleton","sqlite"],
        "url": "https://manios.org/2012/05/17/extend-sqliteopenhelper-as-a-singleton-class-in-android",
        "teaser": null
      },{
        "title": "SQL Server Truncate All Table Data",
        "excerpt":"Today I want to truncate ( delete all table data) in a large SQL Server database instance. Plain delete statements are not going to work as there is a big number of constraints which do not allow that. After quering the web I found this solution which follows three steps:...","categories": ["Databases","Sql Server"],
        "tags": ["all","check constraint","data","delete","server","sql","truncate"],
        "url": "https://manios.org/2012/06/01/sql-server-truncate-all-table-data",
        "teaser": null
      },{
        "title": "SQL Server Select Table information",
        "excerpt":"Today I am going to show you how do we obtain schema information in SQL Server 2005/2008. If you want to select all table names from a specific schema you need to use sys.tables and sys.schemas tables. For example I wanted to select all tables from schema bob: SELECT t.*...","categories": ["Databases","Sql Server"],
        "tags": ["column","database","select","server","sql","table"],
        "url": "https://manios.org/2012/06/22/sql-server-select-table-information",
        "teaser": null
      },{
        "title": "PowerBuilder 10 Get and Set System Language",
        "excerpt":"Today I wanted to retrieve the selected system language from PowerBuilder 10. To accomplish that I had to do some search in the web. After a long period I found this post in Google Groups. It seems that Powerbuilder datawindow fields do have their onwn charset defined in font.charset property....","categories": ["PowerBuilder"],
        "tags": ["pb","pb10","powerbuilder","system language","win32"],
        "url": "https://manios.org/2012/08/07/powerbuilder-10-get-and-change-system-language",
        "teaser": null
      },{
        "title": "Java get file size and download using HTTP",
        "excerpt":"Today I wanted to download a file using Http protocol but before that determine its size. First aff all I open an Http connection and get file size using Content-Length header (see getFileSize method). Then I download the binary file. You can download the source code from here. import java.io.ByteArrayOutputStream;...","categories": ["Java"],
        "tags": ["content-length","download","http","java","network"],
        "url": "https://manios.org/2012/08/09/java-get-file-size-and-download-using-http",
        "teaser": null
      },{
        "title": "Ubuntu Debian Linux useful commands",
        "excerpt":"Updated: 2015-09-08 Change keyboard layout to support both English (US) and Greek (GR) setxkbmap -option grp:alt_shift_toggle us,gr Audjust monitor brightness and gamma # make it darker xrandr --output LVDS1 --brightness 0.4 --gamma 1.6:1.6:1.6 # restore to default brightness and gamma xrandr --output LVDS1 --brightness 1 --gamma 1:1:1 Find top 10...","categories": ["Linux"],
        "tags": ["bash","command","debian","linux","shell"],
        "url": "https://manios.org/2012/08/09/ubuntu-linux-useful-commands",
        "teaser": null
      },{
        "title": "Java Calculate Orthodox Easter Date",
        "excerpt":"Today I wondered if there is an algorithm to calculate the date of Orthodox Easter. After some searching in the web I found the algorithm and converted it to Java code. /** * @param myear * the year of which we want to get the Orthodox Easter date * @return...","categories": ["Android","Java"],
        "tags": ["easter","easter date","java","orthodox"],
        "url": "https://manios.org/2012/08/14/java-calculate-orthodox-easter-date",
        "teaser": null
      },{
        "title": "Perl UTF-8 and Regular Expressions",
        "excerpt":"Today I wanted to explore Perl’s Unicode and regular expression capabilities, so I wrote down this simple script. It is quite amazing how simply Perl handles strings and regular expressions! Otherwise you have to use multiple sed or egrep commands with pipelines. #!/usr/bin/perl use Encode; use utf8; # mercy in...","categories": ["Linux"],
        "tags": ["expression","linux","perl","regular","unicode","utf-8","utf8"],
        "url": "https://manios.org/2012/08/15/perl-utf-8-and-regular-expressions",
        "teaser": null
      },{
        "title": "PowerBuilder Datawindow Grid delete selected rows efficiently",
        "excerpt":"Today I wanted to delete the selected rows of a datawindow grid in Powerbuilder. When I say delete I wanted just to remove them from the screen and not from the database. I used deleteRow(long row) function but it was slow in large datasets. So I asked my departments head...","categories": ["PowerBuilder"],
        "tags": ["buffer","datawindow","delete","efficient","filter","grid","powerbuilder","primary"],
        "url": "https://manios.org/2012/08/24/powerbuilder-datawindow-grid-delete-selected-rows-efficiently",
        "teaser": null
      },{
        "title": "Send email from VBScript using SMTP and Gmail",
        "excerpt":"Today I wanted to send an email using SMTP from my gmail account. I searched the web and I found this and this and this which helped me a lot. So this is the vbscript: on error resume next Const schema = \"http://schemas.microsoft.com/cdo/configuration/\" Const cdoBasic = 1 Const cdoSendUsingPort =...","categories": ["Networking","smtp"],
        "tags": ["gmail","smtp","vbscript","wscript"],
        "url": "https://manios.org/2012/09/12/send-email-from-vbscript-using-smtp-and-gmail",
        "teaser": null
      },{
        "title": "Windows 7 64bit ODBC Data sources",
        "excerpt":"Today I was trying to create and ODBC Data Source to a database using 32 bit database drivers. When I accessed ODBC Data Sources (32bit) from Control Panel, I could not create a data source using 32 bit drivers and I was facing two Driver not found errors which can...","categories": ["Databases","Sql Server"],
        "tags": ["data","database","driver","odbc","server","source","sql"],
        "url": "https://manios.org/2012/09/26/windows-7-64bit-odbc-data-sources",
        "teaser": null
      },{
        "title": "Java String Util Class",
        "excerpt":"Unfortunately, Java does not include a proper String manipulation class in its Java SE SDK. I really do not understand why… However, we see so many implementations and libraries including the distinguished Apache Commons Lang and android.text package. If your project faces a string war (war is hell!) you have...","categories": ["Android","Java"],
        "tags": ["android","empty","java","manipulation","method","string","truncate"],
        "url": "https://manios.org/2012/12/27/198",
        "teaser": null
      },{
        "title": "Java send smtp mail using Gmail",
        "excerpt":"Today I wanted to make a mail notification mechanism for a project of mine. After some web searching I stumbled upon a mkyong.com tutorial where he uses SMTP with Java Mail API to send emails via Gmail. I modified the code in some places to make it more general and...","categories": ["Java","Networking","smtp"],
        "tags": ["gmail","java","mail","network","smtp","ssl","tls"],
        "url": "https://manios.org/2013/02/27/java-send-smtp-mail-using-gmail",
        "teaser": null
      },{
        "title": "Change timezone to Apache server , PHP and MySql in XAMPP",
        "excerpt":"I have installed XAMPP in my Windows machine and I want to alter the timezone in Apache HTTP server, PHP module and MySql in order to see proper dates in server error.log, access.log and php_error_log output. After some searching I found the solution: In httpd.conf (\\xampp\\apache\\conf\\httpd.conf) , add the following...","categories": ["Apache","Databases","HTTP","mysql","PHP"],
        "tags": ["apache","conf","date","http","httpd","ini","module","my","mysql","php","server","timezone"],
        "url": "https://manios.org/2013/03/05/change-timezone-to-apache-server-and-php",
        "teaser": null
      },{
        "title": "Install Raspbian Wheezy Linux to Raspberry Pi using Linux",
        "excerpt":"Επιτέλους! (at last! in greek) After a month and a half of waiting, I received my Raspberry Pi! Now I am going to show you how to install Raspbian Wheezy Linux into your Raspberry pi! To complete this task I used Lubuntu Linux. 1. Get an SD card The SD...","categories": ["Linux","Raspberry Pi","Raspbian","Ubuntu"],
        "tags": ["card","dd","df","format","lubuntu","pi","raspberry","raspbian","sd","shell","ubuntu","umount","wheezy"],
        "url": "https://manios.org/2013/03/10/install-raspbian-wheezy-linux-to-raspberry-pi-using-linux",
        "teaser": null
      },{
        "title": "Import a large sql dump file to a MySQL database from command line",
        "excerpt":"Today I had to import a very large SQL dump file (6 Gb) to a MySQL database using windows command line. If you are using linux it is the same. The process is the following: Open a command prompt (or shell in Linux) with administrative privilleges If you are in...","categories": ["Databases","mysql"],
        "tags": ["command","constraint","data","dump","file","foreign","import","key","line","mysql","shell","sql","unicode"],
        "url": "https://manios.org/2013/03/19/import-a-large-sql-dump-file-to-a-mysql-database-from-command-line",
        "teaser": null
      },{
        "title": "MySQL connection ERROR 1129",
        "excerpt":"Today I had to configure a MySQL database cluster and I faced the following error ERROR 1129 (HY000): Host '192.168.1.12' is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts' while I was trying to access a MySQL instance via HaProxy. After some searching in dba.stackexchange.com, I found that...","categories": ["Databases","HaProxy","Linux","mysql"],
        "tags": ["connection","database","error","haproxy","linux","mysql","windows"],
        "url": "https://manios.org/2013/04/19/mysql-connect-error-1129",
        "teaser": null
      },{
        "title": "Vi set color scheme , line numbers and syntax highlighting",
        "excerpt":"Today I wanted to to set the Color Scheme in vi / vim in my Linux. The default configuration looks ugly: I wanted to look like this: So after some searching in the web I found an article in talkbinary and I did the following: Create in your home directory...","categories": ["Linux","Mint","Raspbian","Ubuntu"],
        "tags": ["colour","highlight","linux","scheme","syntax","vi","vim"],
        "url": "https://manios.org/2013/04/23/vi-set-color-scheme-line-numbers-and-syntax-highlighting",
        "teaser": null
      },{
        "title": "Fix Vmware tools \" kernel header path is not valid \" error",
        "excerpt":"UPDATE (2015-05-13): Confirming that the following approach works for Lubuntu versions 12.10, 14.04 and 14.10 and Linux Mint 15 and 17. Today I wanted to install VMware tools in a Linux Mint 15 and in a Lubuntu virtual machine. I followed the standard procedure as it is described in this...","categories": ["Linux","Mint","Ubuntu","Virtualisation","vmware"],
        "tags": ["header","install","kernel","link","lubuntu","symbolic","tools","ubuntu","vmware"],
        "url": "https://manios.org/2013/06/12/fix-vmware-tools-kernel-header-path-is-not-valid-error",
        "teaser": null
      },{
        "title": "Linux mount Windows shared directory via cifs and samba",
        "excerpt":"Updates: 2013-08-08: Added sec=ntlm 2014-09-04: Added domain=mydomain parameter in order to connect to Active Directory domain Today I wanted to mount a Windows shared directory on my Ubuntu Linux machine. Note that the Windows machine is connected to an Active directory domain. After some searching in the web and trying...","categories": [],
        "tags": ["active","cifs","directory","domain","linux","lubuntu","mount","samba","share","ubuntu","umount"],
        "url": "https://manios.org/2013/08/06/linux-mount-windows-shared-directory-via-cifs-and-samba",
        "teaser": null
      },{
        "title": "Linux get hard disk statistics using Python",
        "excerpt":"Today I wanted to collect disk usage information and send them to a remote server script. I used df command to collect disk usage information and Python to send them to a remote server. Note that the remote server script uses basic authentication. So, here is the script which does...","categories": ["Linux","Python","Ubuntu"],
        "tags": ["authentication","basic","command","df","disk","linux","python","statistic"],
        "url": "https://manios.org/2013/08/13/linux-get-hard-disk-statistics-using-python",
        "teaser": null
      },{
        "title": "Read SMS directly from Sqlite database in Android",
        "excerpt":"Today I wanted to extract the SMS content out of the android SMS application SQLite database using ADB. NOTE: The whole procedure was tested on a rooted phone running Cyanogenmod Android. It may not work on unrooted phones So I achieved that , using the following steps: Find SMS database...","categories": ["Android","Databases","Linux","SQLite"],
        "tags": ["adb","android","cyanogenmod","database","file","linux","location","root","shell","sms","sqlite","telephony","thread"],
        "url": "https://manios.org/2013/10/28/read-sms-directly-from-sqlite-database-in-android",
        "teaser": null
      },{
        "title": "Remove special and control characters from string using Python",
        "excerpt":"Today I had a database table which contained special and control characters (like DLE, DC1, ACK, DC3 etc.) in its records. After some searching I found a way to substitute those characters with their respective unicode escape value. And here Python comes to the rescue again! #!/usr/bin/python # -*- coding:...","categories": ["Linux","Python"],
        "tags": ["convert","database","escape","python","string","unicode","utf-8","utf8"],
        "url": "https://manios.org/2013/12/31/remove-special-and-control-characters-from-string-using-python",
        "teaser": null
      },{
        "title": "Install Apache Solr as Windows Service using NSSM",
        "excerpt":"Today I wanted to install Apache Solr index in Windows 7, Windows Server 2008R2 and Windows Server 2012 machines. So I achieved that , using the following steps: Download Apache Solr Download NSSM - the Non-Sucking Service Manager Create a .bat init file for Solr Create Windows service using NSSM...","categories": ["Apache","Solr","Windows"],
        "tags": ["apache","create","daemon","install","nssm","server","service","solr","windows"],
        "url": "https://manios.org/2014/02/15/install-apache-solr-as-windows-service-using-nssm",
        "teaser": null
      },{
        "title": "Export Untracked, modified, moved and deleted files from a Git repository to archive",
        "excerpt":"Today I wanted to export to a .tar.gz archive all unstracked (new) , modified and deleted files from a Git repository. After some searching, I found a StackOverflow post which helped a lot. So after you cd inside your repository and you have two options: Export modified moved and deleted...","categories": ["Git","Linux","Source control"],
        "tags": ["archive","control","deleted","export","git","modified","moved","new","repository","source","tar","untracked"],
        "url": "https://manios.org/2014/04/12/export-untracked-modified-moved-and-deleted-files-from-a-git-repository-to-archive",
        "teaser": null
      },{
        "title": "Nginx https reverse proxy to Wordpress with Apache, http and different port",
        "excerpt":"Today I had to hide a Wordpress 3.8.1 blog behind an Nginx reverse proxy configured to use only https. Nginx was behind an external firewall which forwarded https://bob.org:8080/blog to Nginx using https (port 4443). The difficulty was that whe Wordpress blog was installed in an Apache HTTP server in port...","categories": ["Linux","Nginx","Server"],
        "tags": ["apache","blog","http","https","nginx","port","proxy","reverse","wordpress"],
        "url": "https://manios.org/2014/04/12/nginx-https-reverse-proxy-to-wordpress-with-apache-http-and-different-port",
        "teaser": null
      },{
        "title": "Linux: Extract audio and video using ffmpeg ",
        "excerpt":"Today I had some mp4 video files and I wanted to extract the audio and video into separate files. So to do that you can do the following: Extract audio from video file and convert it to mp3 To accomplish that, execute the command: ffmpeg -i logothetis-bureaucracy.mp4 -ab 128k -ac...","categories": ["Linux"],
        "tags": ["audio","extract","ffmpeg","linux","mp3","mp4","shell","video"],
        "url": "https://manios.org/2014/07/28/linux-extract-audio-and-video-using-ffmpeg",
        "teaser": null
      },{
        "title": "Solr fix corrupted index using Lucene",
        "excerpt":"A few days ago, a Solr server in our SolrCloud installation stopped unexpectedly. After examining solr.log file I spotted that it could not start again because index.20140510031827076 file was corrupted. After some searching I found this Lucidworks article which described how to deal with a corrupted index file. So I...","categories": ["Apache","Java","Linux","Lucene","Solr","Windows"],
        "tags": ["apache","check","core","corrupt","fix","index","java","linux","lucene","repair","segment","solr","windows"],
        "url": "https://manios.org/2014/11/01/solr-fix-corrupted-index-using-lucene",
        "teaser": null
      },{
        "title": "JSON remove new lines via Linux and use it as string variable and as param in cURL POST request",
        "excerpt":"Today I had to parse a JSON response in a JUnit test and then reuse it in a cURL command line call. Unfortunately I could not read the JSON response from a file or from an HTTP request, so I had to place it inline as a String variable. My...","categories": ["Java","Linux","Mint","Ubuntu"],
        "tags": ["curl","java","json","junit","linux","newline","parse","shell"],
        "url": "https://manios.org/2014/12/30/json-remove-new-lines-via-linux-and-use-it-as-string-variable-and-as-param-in-curl-post-request",
        "teaser": null
      },{
        "title": "Migrate a Gitlab Docker container from version 8.0.4 to 8.2.0",
        "excerpt":"Update 2016-05-13: The following procedure works perfectly for migrations from version 8.0.4 to 8.7.5 A few days ago, I had to migrate a Gitlab instance installed in Docker from version 8.04 to 8.2.0. I followed the exact steps described in GitLab Docker images documentation. But it was not so easy!...","categories": ["Docker","Git","Gitlab","Linux","Source control"],
        "tags": ["container","docker","git","gitlab","image","linux","migrate"],
        "url": "https://manios.org/2015/12/04/migrate-a-gitlab-docker-container-from-version-8-0-4-to-8-2-0",
        "teaser": null
      },{
        "title": "Let's Encrypt SSL certificate without root or sudo privileges",
        "excerpt":"Five days ago we had to renew a number of SSL certificates using free Let’s Encrypt SSL authority to a few Apache servers which were installed in Jelastic PaaS environment. The Apache servers were installed in an environment where: We did have SSH access. We did not have any root...","categories": ["Apache","HTTP","Linux"],
        "tags": ["bash","centos","certificate","encrypt","free","install","jelastic","let's encrypt","lets","linux","root","ssh","ssl","sudo"],
        "url": "https://manios.org/2016/07/12/lets-encrypt-ssl-certificate-without-root-or-sudo-privileges",
        "teaser": null
      },{
        "title": "Configure Eclipse in order to build MapStruct in Java projects",
        "excerpt":"Today I was working on a Java Spring MVC project which uses Maven. My editor was the Eclipse IDE, with the current version of the M2E plug-in. When I pulled the latest commits from the Git repository, my colleagues informed me that we will be using MapStruct as a bean...","categories": ["Eclipse","Java","Spring"],
        "tags": ["eclipse","java","spring","maven","m2e","m2e-apt","plugin","compile","annotation","mapper"],
        "url": "https://manios.org/2017/08/09/configure-eclipse-in-order-to-build-mapstruct-in-java-projects",
        "teaser": null
      },{
        "title": "SublimeText 3 Fix greek (and other languages) accented chars input",
        "excerpt":"Yesterday I installed SublimeText 3 editor (build 3143) in my PC and the first thing I realised was that I could not type any Greek accented characters. Thus when I wanted to type: ex Το γοργόν και χάριν έχει. , Sublime actually showed Το γοργ´ον και χ´αριν ´εχει At first...","categories": ["Linux","Text editor"],
        "tags": ["sublimetext","sublime","text","editor","linux","accented","accent","char","character","greek","fix"],
        "url": "https://manios.org/2017/10/17/sublime-3-fix-greek-accented-characters",
        "teaser": null
      },{
        "title": "Use HAProxy and Docker to load balance requests to Solr and SolrCloud",
        "excerpt":"We use Solr 4.6 with SolrCloud configuration in a production system. You may say: “It is hight time you upgraded to the latest version, isn’t it?”. And you will be absolute right! But currently this is not the case because full reindexing costs! Our SolrCloud consists of one shard and...","categories": ["Linux","Solr","HAProxy"],
        "tags": ["haproxy","solr","solrcloud","docker","linux","install","load","balancing"],
        "url": "https://manios.org/2017/11/15/use-haproxy-and-docker-for-solr-load-balancing",
        "teaser": null
      },{
        "title": "MongoDB replica error RS102 too stale to catch up during full recovery",
        "excerpt":"We run MongoDB 2.6.0 on a production system configured with a replica set of 3 members: Primary Secondary Arbiter About 3 weeks ago we had to move the data files from a data centre to another due to disk size problems. Database size had reached 15.6TB. Thus we copied only...","categories": ["Linux","Databases"],
        "tags": ["mongo","mongodb","database","replication","recovery","secondary","replica","sync","synchronisation","linux"],
        "url": "https://manios.org/2017/11/23/mongodb-replica-stale-during-recovery",
        "teaser": null
      },{
        "title": "Install, configure and troubleshoot NTP servers in Debian Linux",
        "excerpt":"If you are reading this article, perhaps you have searched a lot about NTP server installation in Linux, issues and problems encountered and how to troubleshoot them! We know that there are so many articles about how to configure NTP servers but we could not find any which contains all...","categories": ["Linux","Debian"],
        "tags": ["linux","ntp","debian","ubuntu","server","time","sync","synchronisation","install","configure","error","network","ntpdate","ntpq","service","strata","high","suitable","minpoll","maxpoll","pool","iburst"],
        "url": "https://manios.org/2017/12/14/install-and-configure-and-troubleshoot-ntp-servers-in-debian-linux",
        "teaser": null
      },{
        "title": "HTTP Basic Authentication in Java SOAP JAX-WS web service client",
        "excerpt":"Today I had to create a Java client for a SOAP web service. So I opened Netbeans IDE and used the great tool which generates JAX-WS client code using the respective service .wsdl file. However, the service needed to be called using Basic Http Authentication. NOTE: The solution provided works...","categories": ["Java"],
        "tags": ["java","soap","basic","auth","authentication","client","jax","ws","jax-ws","web","service","http","netbeans","wsdl"],
        "url": "https://manios.org/2018/03/30/java-soap-jax-ws-client-basic-auth",
        "teaser": null
      },{
        "title": "Debug HTTP request of Java SOAP JAX-WS web service client",
        "excerpt":"Today I wanted to debug in Java a JAX-WS SOAP web service client and see the exact message that is send as an HTTP request. So after searching, I found in this StackOverflow question that if we insert the following lines before calling the service: System.setProperty(\"com.sun.xml.ws.transport.http.client.HttpTransportPipe.dump\", \"true\"); System.setProperty(\"com.sun.xml.internal.ws.transport.http.client.HttpTransportPipe.dump\", \"true\"); System.setProperty(\"com.sun.xml.ws.transport.http.HttpAdapter.dump\",...","categories": ["Java"],
        "tags": ["java","http","request","message","debug","soap","client","jax","ws","jax-ws","web","service","print","log","console","wsdl"],
        "url": "https://manios.org/2018/04/03/java-soap-service-client-debug-http-message",
        "teaser": null
      },{
        "title": "Git merge conflicts using Tortoise Git merge in Windows",
        "excerpt":"Today we wanted to use Tortoise Git Merge, a Windows Git utility which comes with Tortoise Git. It helps us do a 3 way merge and solve our conflicts easily. The advantage of it is that it automatically merges the lines that where uniquely modified in every file and you...","categories": ["Git","Linux"],
        "tags": ["git","merge","mergetool","tortoise","conflict","windows","client"],
        "url": "https://manios.org/2018/05/30/git-merge-conflicts-using-tortoise-git-merge-windows",
        "teaser": null
      },{
        "title": "Creating a Beat based on Metricbeat resolving Init and create metricset failures",
        "excerpt":"I suspect that you are reading this post after having trouble creating a new Elastic Beat based on Metricbeat. Bud do not worry! We have you covered and solved the issues for you! Long story short, a few days ago we wanted to create a new Metricbeat. After reading and...","categories": ["Go","Golang","Elasticsearch"],
        "tags": ["elastic","metricbeat","beats","elasticsearch","create","generator","go","golang","elk","search","kibana","index","monitor"],
        "url": "https://manios.org/2018/07/23/create-a-beat-based-on-metricbeat-resolving-bugs",
        "teaser": null
      },{
        "title": "Logstash - Enrich IP with Geolocation using Maxmind GeoLite2 City and ISP",
        "excerpt":"Today we wanted to parse some json logs which we had in a file using Logstash and enrich them with Geolocation information regarding the city and the ISP an IP belongs. The file, (let’s call it /var/log/input-geo.json) had the following structure: {\"name\":\"Christos\",\"src_ip\":\"63.145.248.101\",\"age\":12} {\"name\":\"Nikos\",\"src_ip\":\"98.158.156.175\",\"age\":10} Logstash has GeoIP filter which adds information...","categories": ["Logstash","Elasticsearch"],
        "tags": ["logstash","geolocation","ip","geoip","maxmind","geo","geolite","geolite2","database","json","parse","message","log"],
        "url": "https://manios.org/2018/08/14/logstash-geoip-json-logs-maxmint-geolite-docker",
        "teaser": null
      },{
        "title": "Rsyslog - Parse Json and enrich IP with Geolocation using Maxmind GeoLite2 City and ISP",
        "excerpt":"Today we wanted to parse some json logs which we had in a file using Rsyslog and enrich them with Geolocation information regarding the city and the ISP an IP belongs. We initially tried with Logstash (see relevant previous blog post) but it was too slow. Thus we decided to...","categories": ["Rsyslog","Elasticsearch"],
        "tags": ["rsyslog","mmdblookup","omelasticsearch","geolocation","ip","geoip","maxmind","geo","geoip","geolite","geolite2","database","json","parse","message","log"],
        "url": "https://manios.org/2018/08/18/logstash-geoip-json-logs-maxmint-geolite-docker",
        "teaser": null
      },{
        "title": "Resolve \"Could not find __debug_frame section in binary\" when trying to Debug Metricbeat with Delve and Go 1.10.4",
        "excerpt":"Today we were trying to debug Metricbeat (on commit #cff3e40c) using Visual Studio Code v1.27.2 and Delve debugger but it failed with the error: Could not find __debug_frame section in binary Our environment was: $ go version go version go1.10.4 linux/amd64 $ dlv version Delve Debugger Version: 1.1.0 Build: $Id:...","categories": ["Go","Golang","Elastic","Beats"],
        "tags": ["elastic","metricbeat","beats","elasticsearch","debug","frame","go","golang","elk","error","delve","kibana","index","monitor"],
        "url": "https://manios.org/2018/10/05/metricbeat-debug-frame-section-error",
        "teaser": null
      },{
        "title": "Solved: HP 630 notebook overheating problem",
        "excerpt":"First Incident A year ago (April 2017) while we were using a HP 630 notebook in a training, it started overheating and eventually made an emergency shutdown. The fan was spinning at maximum speed and the problem was not solved by restarting it. Temperatures could rise high up to 75...","categories": ["HP","Notebook"],
        "tags": ["hp","630","hp630","hp-630","overheat","overheating","problem","shutdown","clean","fan"],
        "url": "https://manios.org/2018/10/07/hp-630-notebook-overheating-problem",
        "teaser": null
      },{
        "title": "MongoDB query to aggregate documents by a specific property",
        "excerpt":"Yesterday a colleague had a problem on finding a query. His documents looked like the following: { id : 1, category : \"aaa\", answers : [ { gender : \"male\"} ] } { id : 2, category : \"bbb\" , answers : [ { gender : \"female\"} ] }, {...","categories": ["MongoDB","Database","NoSQL"],
        "tags": ["mongodb","nosql","database","query","aggregation","framework"],
        "url": "https://manios.org/2019/08/11/mongodb-aggregate-documents-by-property",
        "teaser": null
      },{
        "title": "Force Maven to execute offline with local repository dependencies in a machine without Internet connection",
        "excerpt":"Debugging an application which runs on a remote Virtual Machine can prove to be very hard, especially if your client has “exceptional” conditions due to security, company or any other psycological measures/policies. For example, your VM can be a Windows machine (yes, Windows servers are an exception themselves and impose...","categories": ["MongoDB","Database","NoSQL"],
        "tags": ["maven","offline","goal","dependencies","without","internet","connection","parent","pom","non","resolvable"],
        "url": "https://manios.org/2019/08/21/force-maven-offline-execute-goal-dependencies",
        "teaser": null
      },{
        "title": "Convert Markdown to PDF using Docker, Pandoc and Asciidoctor",
        "excerpt":"Today we had to deliver a .pdf file to a customer containing documentation about a system. The documentation was written in Markdown and needed to be converted to PDF. After some thoughts we did not find some straightforward way to do it, so we needed to convert Markdown to Asciidoctor...","categories": ["Markdown","PDF","File","Conversion"],
        "tags": ["markdown","md","pdf","docker","asciidoctor","convert","file","container"],
        "url": "https://manios.org/2020/01/08/convert-markdown-to-pdf-using-docker-pandoc-asciidoctor",
        "teaser": null
      },{
        "title": "Lenovo Thinkpad T470p camera problem switching on and off in Windows 10",
        "excerpt":"Issues After Windows 10 performed its updates in our Lenovo Thinkpad T470p laptop, we could not use the camera. The symptoms were the following: When we tried to use the laptop camera, the camera turned on (led light is green) and after 2 seconds it turned off (led light off)....","categories": ["Lenovo","Camera"],
        "tags": ["lenovo","thinkpad","t470p","camera","issue","problem","not","working","error","windows","update","driver"],
        "url": "https://manios.org/2020/01/12/lenovo-thinkpad-t470p-camera-problem-windows-10",
        "teaser": null
      },{
        "title": "PostgreSQL case and accent insentitive SQL queries",
        "excerpt":"A few days ago we were implementing a Spring Boot application which stored its data into a PostgreSQL database. As a requirement we needed to search into the database with LIKE operator in our SQL queries and at the same time perform case and accent insensitive searches. Since we are...","categories": ["Postgres","Database","SQL"],
        "tags": ["postgres","postgresql","database","case","accent","insensitive","query","sql","like","statement","search","docker"],
        "url": "https://manios.org/2021/02/17/postgresql-case-accent-insentitive-sql-queries",
        "teaser": null
      },{
        "title": "Convert from/to JSON decimal fields in Go (golang) structs",
        "excerpt":"Yesterday we had to marshal and umarshal to/from JSON some HTTP requests and responses in a Go microservice we are building. We already use ericlagergren/decimal. However we have spotted that the struct for the response were declared like this: type IncomeExpensesResponse struct { Income string `json:\"income\"` Expenses string `json:\"expenses\"` }...","categories": ["Go","Golang","JSON"],
        "tags": ["go","golang","struct","json","field","decimal","number","floating","point","marshal","unmarshal"],
        "url": "https://manios.org/2021/07/24/golang-decimal-field-in-struct-json-convert",
        "teaser": null
      },{
        "title": "Go Mongodb Error Cannot create field X in element {Y: null}",
        "excerpt":"Today we had a MongoDB 3.6 collection with the following documents: db.getCollection('person').insertMany([ {\"name\": \"Odyseas\", \"surname\": \"Androutsos\", \"profilePicture\": null}, {\"name\": \"Theodoros\", \"surname\": \"Kolokotronis\", \"profilePicture\": null}, {\"name\": \"Ioannis\", \"surname\": \"Makrygiannis\", \"profilePicture\": null}, {\"name\": \"Ioannis\", \"surname\": \"Kapodistrias\", \"profilePicture\": null}, {\"name\": \"Emanouil\", \"surname\": \"Pappas\", \"profilePicture\": null} ]) and we wanted to update them with...","categories": ["Go","Golang","MongoDB"],
        "tags": ["go","golang","mongodb","driver","database","error","dot","field","nested"],
        "url": "https://manios.org/2021/08/04/go-mongodb-error-cannot-create-field-in-element-null",
        "teaser": null
      },{
        "title": "SQL query to check if a date range is between two dates in Oracle database",
        "excerpt":"A few days ago, we had to select records from an Oracle database table which should be inside a given date range. The difficult thing with those records was that they had a date range defined in them too. The table was described as: CREATE TABLE \"DATEBOB\" ( \"ID\" NUMBER(*,0)...","categories": ["Oracle","Databases","SQL"],
        "tags": ["oracle","sql","query","database","date","range"],
        "url": "https://manios.org/2022/07/22/oracle-sql-select-date-range-between-range",
        "teaser": null
      },{
        "title": "MS SQL Server Docker container restore database from .bak file created in Windows to a New Location",
        "excerpt":"Yesterday, a client which uses Microsoft SQL Server 2008 R2 (SP2) wanted to test if his database backup can work in Microsoft SQL Server 2019 Developer version. He currently runs his SQL Server instance in Windows Server. He provided us with a .bak file, let us call it for this...","categories": ["MS SQL Server","MS SQL","Databases","SQL"],
        "tags": ["mssql","sql","sqlserver","query","database","restore","bak","docker","container"],
        "url": "https://manios.org/2022/12/23/oracle-sql-select-date-range-between-range",
        "teaser": null
      },{
        "title": "Kubernetes tail Spring Boot json logs in plain text Log4j (Logback) format using Stern",
        "excerpt":"A few days ago we were debugging a Java Spring Boot web application (called engine-export-service) in Kubernetes and we wanted to tail the Pod logs. Since we have a lot of replicas for the engine-export-service Deployment of this application, we decided to use Stern, The Multi pod and container log...","categories": ["Kubernetes","Spring","Spring Boot"],
        "tags": ["kubernetes","spring","boot","pod","log","tail","stern"],
        "url": "https://manios.org/2023/06/18/kubernetes-view-pod-json-log-in-plain-text-with-stern-template",
        "teaser": null
      },{
        "title": "ORA-17026: Numeric overflow when calling Oracle SQL function using Hibernate 6",
        "excerpt":"A few days ago we stumbled upon a very strange error while migrating a legacy application from Spring Boot 2.7.0 with Spring Data JPA (Hibernate Core 5.6.9-Final) to Spring Boot 3.1.0 (Hibernate Core 6.2.2-Final) The code was executing an Oracle database function, called pl_functions.persist_bonus_points which was persisting some loyalty customer...","categories": ["Java","Hibernate","Oracle","Database","Spring","Spring Boot"],
        "tags": ["java","hibernate","oracle","database","function","overflow","error","spring","spring-boot"],
        "url": "https://manios.org/2023/08/30/java-spring-hibernate-error-ora-17026-numeric-overflow-oracle-function-call",
        "teaser": null
      },{
        "title": "Linux Mint Mate configure screensaver and display sleep via command line",
        "excerpt":"Problem A few days ago, while we were watching a film in VLC player in my laptop which runs Linux Mint 20.1 MATE, the screen went into screensaver mode. This happened multiple times and we had to press a button to make the screen come back. We have searched the...","categories": ["Linux","Mint","Ubuntu","Bash"],
        "tags": ["linux","mint","screensaver","configure","display","sleep","power","management"],
        "url": "https://manios.org/2024/02/11/linux-mint-mate-screensaver-command-line-configure-enable-disable",
        "teaser": null
      }]
