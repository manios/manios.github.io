var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Test1",
      excerpt: "Welcome to WordPress.com. After you read this, you should delete and write your own post, with a new title above....",
      categories: ["Databases","Linux"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Zip and UnZip in Java",
      excerpt: "```java\npackage com.ots.pocketpolice.sync;\n\n",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Android get SQLite Library Version",
      excerpt: "```java /** * get the version of the SQLite Library that is installed in the android * system * *...",
      categories: ["Android","Databases"],
      tags: ["android","database","library","sqlite"],
      id: 2
    });
    
  
    idx.add({
      title: "Object ArrayList Sort",
      excerpt: "Let’s say we have a simple class called Person public class Person{ public String name; public int age; public Person(String...",
      categories: ["Java"],
      tags: ["arraylist","collection","java","object","sort"],
      id: 3
    });
    
  
    idx.add({
      title: "Android External Storage Free Space",
      excerpt: "Today I wanted to store some images to SD card and I wanted to find the available space:\n\n",
      categories: ["Android","Java"],
      tags: ["android","availabe","java","sd","space"],
      id: 4
    });
    
  
    idx.add({
      title: "Copy/Paste source code from Eclipse to Microsoft Word",
      excerpt: "Today I wanted to copy and paste a piece of code from Eclipse Indigo to Microsoft Word 2007 and keep...",
      categories: [],
      tags: ["copy","eclipse","highlighting","microsoft","paste","source","syntax","word"],
      id: 5
    });
    
  
    idx.add({
      title: "Android MD5 password encryption",
      excerpt: "Today I will show you how to generate the MD5 hash String for a given String in Android\n\n",
      categories: ["Android","Java"],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "Check Network connectivity and obtain Wifi MAC address in Android",
      excerpt: "Updated: 2012-05-09\n\n",
      categories: ["Android","Java"],
      tags: ["address","android","card","connectivity","mac","network","wifi"],
      id: 7
    });
    
  
    idx.add({
      title: "Android Custom Dialogs Part 1: Set value",
      excerpt: "No Content Found\n",
      categories: [],
      tags: ["android","java"],
      id: 8
    });
    
  
    idx.add({
      title: "Install Jboss 5.1.0.GA to  Windows 7",
      excerpt: "Today I am going to show you how to install Jboss 5.1.0.GA on  a Windows 7 machine.\n\n",
      categories: ["Application Server","JBoss"],
      tags: ["install","jboss","server","windows"],
      id: 9
    });
    
  
    idx.add({
      title: "Bluetooth adapter device name and MAC address in Android",
      excerpt: "Today I am going to show you how to get the bluetooth adapter device  name (if exists) and MAC address...",
      categories: ["Android","Java"],
      tags: ["adapter","address","android","bluetooth","card","connectivity","mac","network"],
      id: 10
    });
    
  
    idx.add({
      title: "Android pre-populated Database",
      excerpt: "Today I am going to show you how to create an android application which comes with a pre-populated database. The...",
      categories: ["Android","Databases"],
      tags: ["android","asset","database","java","pre-populated"],
      id: 11
    });
    
  
    idx.add({
      title: "Launch Logcat programmatically in Android",
      excerpt: "Today I wanted to write logcat output to a file while my application is running. To do so I executed...",
      categories: ["Android","Java"],
      tags: ["android","log","logcat","output"],
      id: 12
    });
    
  
    idx.add({
      title: "Extend SQLiteOpenHelper as a singleton class in Android ",
      excerpt: "Update: 2012-07-27\n\n",
      categories: ["Android","Databases"],
      tags: ["android","database","public","singleton","sqlite"],
      id: 13
    });
    
  
    idx.add({
      title: "SQL Server Truncate All Table Data",
      excerpt: "Today I want to truncate ( delete all table data) in a large SQL Server database instance. Plain delete statements...",
      categories: ["Databases","Sql Server"],
      tags: ["all","check constraint","data","delete","server","sql","truncate"],
      id: 14
    });
    
  
    idx.add({
      title: "SQL Server Select Table information",
      excerpt: "Today I am going to show you how do we obtain schema information in SQL Server 2005/2008. If you want...",
      categories: ["Databases","Sql Server"],
      tags: ["column","database","select","server","sql","table"],
      id: 15
    });
    
  
    idx.add({
      title: "PowerBuilder 10 Get and Set System Language",
      excerpt: "Today I wanted to retrieve the selected system language from PowerBuilder 10. To accomplish that I had to do some...",
      categories: ["PowerBuilder"],
      tags: ["pb","pb10","powerbuilder","system language","win32"],
      id: 16
    });
    
  
    idx.add({
      title: "Java get file size and download using HTTP",
      excerpt: "Today I wanted to download a file using Http protocol but before that determine its size. First aff all I...",
      categories: ["Java"],
      tags: ["content-length","download","http","java","network"],
      id: 17
    });
    
  
    idx.add({
      title: "Ubuntu Debian Linux useful commands",
      excerpt: "Updated: 2015-09-08\n\n",
      categories: ["Linux"],
      tags: ["bash","command","debian","linux","shell"],
      id: 18
    });
    
  
    idx.add({
      title: "Java Calculate Orthodox Easter Date",
      excerpt: "Today I wondered if there is an algorithm to calculate the date of Orthodox Easter. After some searching in the...",
      categories: ["Android","Java"],
      tags: ["easter","easter date","java","orthodox"],
      id: 19
    });
    
  
    idx.add({
      title: "Perl UTF-8 and Regular Expressions",
      excerpt: "Today I wanted to explore Perl’s Unicode and regular expression capabilities, so I wrote down this simple script. It is...",
      categories: ["Linux"],
      tags: ["expression","linux","perl","regular","unicode","utf-8","utf8"],
      id: 20
    });
    
  
    idx.add({
      title: "PowerBuilder Datawindow Grid delete selected rows efficiently",
      excerpt: "Today I wanted to delete the selected rows of a datawindow grid in Powerbuilder. When I say delete I wanted...",
      categories: ["PowerBuilder"],
      tags: ["buffer","datawindow","delete","efficient","filter","grid","powerbuilder","primary"],
      id: 21
    });
    
  
    idx.add({
      title: "Send email from VBScript using SMTP and Gmail",
      excerpt: "Today I wanted to send an email using SMTP from my gmail account. I searched the web and I found...",
      categories: ["Networking","smtp"],
      tags: ["gmail","smtp","vbscript","wscript"],
      id: 22
    });
    
  
    idx.add({
      title: "Windows 7 64bit ODBC Data sources",
      excerpt: "Today I was trying to create and ODBC Data Source to a database using 32 bit database drivers. When I...",
      categories: ["Databases","Sql Server"],
      tags: ["data","database","driver","odbc","server","source","sql"],
      id: 23
    });
    
  
    idx.add({
      title: "Java String Util Class",
      excerpt: "Unfortunately, Java does not include a proper String manipulation class in its Java SE SDK. I really do not understand...",
      categories: ["Android","Java"],
      tags: ["android","empty","java","manipulation","method","string","truncate"],
      id: 24
    });
    
  
    idx.add({
      title: "Java send smtp mail using Gmail",
      excerpt: "Today I wanted to make a mail notification mechanism for a project of mine. After some web searching I stumbled...",
      categories: ["Java","Networking","smtp"],
      tags: ["gmail","java","mail","network","smtp","ssl","tls"],
      id: 25
    });
    
  
    idx.add({
      title: "Change timezone to Apache server , PHP and MySql in XAMPP",
      excerpt: "I have installed XAMPP in my Windows machine and I want to alter the timezone in Apache HTTP server, PHP...",
      categories: ["Apache","Databases","HTTP","mysql","PHP"],
      tags: ["apache","conf","date","http","httpd","ini","module","my","mysql","php","server","timezone"],
      id: 26
    });
    
  
    idx.add({
      title: "Install Raspbian Wheezy Linux to Raspberry Pi using Linux",
      excerpt: "Επιτέλους! (at last! in greek) After a month and a half of waiting, I received my Raspberry Pi! Now I...",
      categories: ["Linux","Raspberry Pi","Raspbian","Ubuntu"],
      tags: ["card","dd","df","format","lubuntu","pi","raspberry","raspbian","sd","shell","ubuntu","umount","wheezy"],
      id: 27
    });
    
  
    idx.add({
      title: "Import a large sql dump file to a MySQL database from command line",
      excerpt: "Today I had to import a very large SQL dump file (6 Gb) to a MySQL database using windows command...",
      categories: ["Databases","mysql"],
      tags: ["command","constraint","data","dump","file","foreign","import","key","line","mysql","shell","sql","unicode"],
      id: 28
    });
    
  
    idx.add({
      title: "MySQL connection ERROR 1129",
      excerpt: "Today I had to configure a MySQL database cluster and I faced the following error\n\n",
      categories: ["Databases","HaProxy","Linux","mysql"],
      tags: ["connection","database","error","haproxy","linux","mysql","windows"],
      id: 29
    });
    
  
    idx.add({
      title: "Vi set color scheme , line numbers and syntax highlighting",
      excerpt: "Today I wanted to to set the Color Scheme in vi / vim in my Linux. The default configuration looks...",
      categories: ["Linux","Mint","Raspbian","Ubuntu"],
      tags: ["colour","highlight","linux","scheme","syntax","vi","vim"],
      id: 30
    });
    
  
    idx.add({
      title: "Fix Vmware tools \" kernel header path is not valid \" error",
      excerpt: "UPDATE (2015-05-13): Confirming that the following approach works for Lubuntu versions 12.10, 14.04 and 14.10 and Linux Mint 15 and...",
      categories: ["Linux","Mint","Ubuntu","Virtualisation","vmware"],
      tags: ["header","install","kernel","link","lubuntu","symbolic","tools","ubuntu","vmware"],
      id: 31
    });
    
  
    idx.add({
      title: "Linux mount Windows shared directory via cifs and samba",
      excerpt: "Updates:\n\n  2013-08-08: Added sec=ntlm\n  2014-09-04: Added domain=mydomain parameter in order to connect to Active Directory domain\n\n\n",
      categories: [],
      tags: ["active","cifs","directory","domain","linux","lubuntu","mount","samba","share","ubuntu","umount"],
      id: 32
    });
    
  
    idx.add({
      title: "Linux get hard disk statistics using Python",
      excerpt: "Today I wanted to collect disk usage information and send them to a remote server script. I used df command...",
      categories: ["Linux","Python","Ubuntu"],
      tags: ["authentication","basic","command","df","disk","linux","python","statistic"],
      id: 33
    });
    
  
    idx.add({
      title: "Read SMS directly from Sqlite database in Android",
      excerpt: "Today I wanted to extract the SMS content out of the android SMS application SQLite database using ADB.\n\n",
      categories: ["Android","Databases","Linux","SQLite"],
      tags: ["adb","android","cyanogenmod","database","file","linux","location","root","shell","sms","sqlite","telephony","thread"],
      id: 34
    });
    
  
    idx.add({
      title: "Remove special and control characters from string using Python",
      excerpt: "Today I had a database table which contained special and control characters (like DLE, DC1, ACK, DC3 etc.) in its...",
      categories: ["Linux","Python"],
      tags: ["convert","database","escape","python","string","unicode","utf-8","utf8"],
      id: 35
    });
    
  
    idx.add({
      title: "Install Apache Solr as Windows Service using NSSM",
      excerpt: "Today I wanted to install Apache Solr index in Windows 7, Windows Server 2008R2 and Windows Server 2012 machines. So...",
      categories: ["Apache","Solr","Windows"],
      tags: ["apache","create","daemon","install","nssm","server","service","solr","windows"],
      id: 36
    });
    
  
    idx.add({
      title: "Export Untracked, modified, moved and deleted files from a Git repository to archive",
      excerpt: "Today I wanted to export to a .tar.gz archive all unstracked (new) , modified and deleted files from a Git...",
      categories: ["Git","Linux","Source control"],
      tags: ["archive","control","deleted","export","git","modified","moved","new","repository","source","tar","untracked"],
      id: 37
    });
    
  
    idx.add({
      title: "Nginx https reverse proxy to Wordpress with Apache, http and different port",
      excerpt: "Today I had to hide a Wordpress 3.8.1 blog behind an Nginx reverse proxy configured to use only https. Nginx...",
      categories: ["Linux","Nginx","Server"],
      tags: ["apache","blog","http","https","nginx","port","proxy","reverse","wordpress"],
      id: 38
    });
    
  
    idx.add({
      title: "Linux: Extract audio and video using ffmpeg ",
      excerpt: "Today I had some mp4 video files and I wanted to extract the audio and video into separate files. So...",
      categories: ["Linux"],
      tags: ["audio","extract","ffmpeg","linux","mp3","mp4","shell","video"],
      id: 39
    });
    
  
    idx.add({
      title: "Solr fix corrupted index using Lucene",
      excerpt: "A few days ago, a Solr server in our SolrCloud installation stopped unexpectedly. After examining solr.log file I spotted that...",
      categories: ["Apache","Java","Linux","Lucene","Solr","Windows"],
      tags: ["apache","check","core","corrupt","fix","index","java","linux","lucene","repair","segment","solr","windows"],
      id: 40
    });
    
  
    idx.add({
      title: "JSON remove new lines via Linux and use it as string variable and as param in cURL POST request",
      excerpt: "Today I had to parse a JSON response in a JUnit test and then reuse it in a cURL command...",
      categories: ["Java","Linux","Mint","Ubuntu"],
      tags: ["curl","java","json","junit","linux","newline","parse","shell"],
      id: 41
    });
    
  
    idx.add({
      title: "Migrate a Gitlab Docker container from version 8.0.4 to 8.2.0",
      excerpt: "Update 2016-05-13: The following procedure works perfectly for migrations from version 8.0.4 to 8.7.5\n\n",
      categories: ["Docker","Git","Gitlab","Linux","Source control"],
      tags: ["container","docker","git","gitlab","image","linux","migrate"],
      id: 42
    });
    
  
    idx.add({
      title: "Let's Encrypt SSL certificate without root or sudo privileges",
      excerpt: "Five days ago we had to renew a number of SSL certificates using free Let’s Encrypt SSL authority to a...",
      categories: ["Apache","HTTP","Linux"],
      tags: ["bash","centos","certificate","encrypt","free","install","jelastic","let's encrypt","lets","linux","root","ssh","ssl","sudo"],
      id: 43
    });
    
  
    idx.add({
      title: "Configure Eclipse in order to build MapStruct in Java projects",
      excerpt: "Today I was working on a Java Spring MVC project which uses Maven. My editor was the Eclipse IDE, with...",
      categories: ["Eclipse","Java","Spring"],
      tags: ["eclipse","java","spring","maven","m2e","m2e-apt","plugin","compile","annotation","mapper"],
      id: 44
    });
    
  
    idx.add({
      title: "SublimeText 3 Fix greek (and other languages) accented chars input",
      excerpt: "Yesterday I installed SublimeText 3 editor (build 3143) in my PC and the first thing I realised was that I...",
      categories: ["Linux","Text editor"],
      tags: ["sublimetext","sublime","text","editor","linux","accented","accent","char","character","greek","fix"],
      id: 45
    });
    
  
    idx.add({
      title: "Use HAProxy and Docker to load balance requests to Solr and SolrCloud",
      excerpt: "We use Solr 4.6 with SolrCloud configuration in a production system. You may say: “It is hight time you upgraded...",
      categories: ["Linux","Solr","HAProxy"],
      tags: ["haproxy","solr","solrcloud","docker","linux","install","load","balancing"],
      id: 46
    });
    
  
    idx.add({
      title: "MongoDB replica error RS102 too stale to catch up during full recovery",
      excerpt: "We run MongoDB 2.6.0 on a production system configured with a replica set of 3 members:\n\n  Primary\n  Secondary\n  Arbiter\n\n\n",
      categories: ["Linux","Databases"],
      tags: ["mongo","mongodb","database","replication","recovery","secondary","replica","sync","synchronisation","linux"],
      id: 47
    });
    
  
    idx.add({
      title: "Install, configure and troubleshoot NTP servers in Debian Linux",
      excerpt: "If you are reading this article, perhaps you have searched a lot about NTP server installation in Linux, issues and...",
      categories: ["Linux","Debian"],
      tags: ["linux","ntp","debian","ubuntu","server","time","sync","synchronisation","install","configure","error","network","ntpdate","ntpq","service","strata","high","suitable","minpoll","maxpoll","pool","iburst"],
      id: 48
    });
    
  
    idx.add({
      title: "HTTP Basic Authentication in Java SOAP JAX-WS web service client",
      excerpt: "Today I had to create a Java client for a SOAP web service. So I opened Netbeans IDE and used...",
      categories: ["Java"],
      tags: ["java","soap","basic","auth","authentication","client","jax","ws","jax-ws","web","service","http","netbeans","wsdl"],
      id: 49
    });
    
  
    idx.add({
      title: "Debug HTTP request of Java SOAP JAX-WS web service client",
      excerpt: "Today I wanted to debug in Java a JAX-WS SOAP web service client and see the exact message that is...",
      categories: ["Java"],
      tags: ["java","http","request","message","debug","soap","client","jax","ws","jax-ws","web","service","print","log","console","wsdl"],
      id: 50
    });
    
  
    idx.add({
      title: "Git merge conflicts using Tortoise Git merge in Windows",
      excerpt: "Today we wanted to use Tortoise Git Merge, a Windows Git utility which comes with Tortoise Git. It helps us...",
      categories: ["Git","Linux"],
      tags: ["git","merge","mergetool","tortoise","conflict","windows","client"],
      id: 51
    });
    
  
    idx.add({
      title: "Creating a Beat based on Metricbeat resolving Init and create metricset failures",
      excerpt: "I suspect that you are reading this post after having trouble creating a new Elastic Beat based on Metricbeat. Bud...",
      categories: ["Go","Golang","Elasticsearch"],
      tags: ["elastic","metricbeat","beats","elasticsearch","create","generator","go","golang","elk","search","kibana","index","monitor"],
      id: 52
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Test1",
        "url": "https://manios.org/2011/10/14/hello-world",
        "excerpt": "Welcome to WordPress.com. After you read this, you should delete and write your own post, with a new title above....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Zip and UnZip in Java",
        "url": "https://manios.org/2012/01/18/zip-and-unzip-in-java",
        "excerpt": "package com.ots.pocketpolice.sync; import java.io.BufferedOutputStream; import java.io.File; import java.io.FileInputStream; import java.io.FileOutputStream; import java.io.IOException; import java.io.InputStream; import java.util.Enumeration; import java.util.zip.ZipEntry; import java.util.zip.ZipFile;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Android get SQLite Library Version",
        "url": "https://manios.org/2012/02/22/android-get-sqlite-library-version",
        "excerpt": "/** * get the version of the SQLite Library that is installed in the android * system * * @return...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Object ArrayList Sort",
        "url": "https://manios.org/2012/02/28/object-arraylist-sort",
        "excerpt": "Let’s say we have a simple class called Person public class Person{ public String name; public int age; public Person(String...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Android External Storage Free Space",
        "url": "https://manios.org/2012/03/07/android-external-storage-free-space",
        "excerpt": "Today I wanted to store some images to SD card and I wanted to find the available space: /** *...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Copy/Paste source code from Eclipse to Microsoft Word",
        "url": "https://manios.org/2012/03/08/copypaste-source-code-from-eclipse-to-microsoft-word",
        "excerpt": "Today I wanted to copy and paste a piece of code from Eclipse Indigo to Microsoft Word 2007 and keep...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Android MD5 password encryption",
        "url": "https://manios.org/2012/03/19/android-md5-password-encryption",
        "excerpt": "Today I will show you how to generate the MD5 hash String for a given String in Android /** *...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Check Network connectivity and obtain Wifi MAC address in Android",
        "url": "https://manios.org/2012/04/05/check-network-connectivity-in-android",
        "excerpt": "Updated: 2012-05-09 Today I wanted to check if my Android device is connected to a TCP/IP network. So I searched...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Android Custom Dialogs Part 1: Set value",
        "url": "https://manios.org/2012/05/07/android-custom-dialogs-part-1-set-value",
        "excerpt": "No Content Found\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Install Jboss 5.1.0.GA to  Windows 7",
        "url": "https://manios.org/2012/05/08/install-jboss-5-1-0-ga-to-windows-7",
        "excerpt": "Today I am going to show you how to install Jboss 5.1.0.GA on a Windows 7 machine. First of all...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Bluetooth adapter device name and MAC address in Android",
        "url": "https://manios.org/2012/05/09/bluetooth-adapter-device-name-and-mac-address-in-android",
        "excerpt": "Today I am going to show you how to get the bluetooth adapter device  name (if exists) and MAC address...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Android pre-populated Database",
        "url": "https://manios.org/2012/05/14/android-pre-populated-database",
        "excerpt": "Today I am going to show you how to create an android application which comes with a pre-populated database. The...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Launch Logcat programmatically in Android",
        "url": "https://manios.org/2012/05/15/check-network-connectivity-and-obtain-wifi-mac-address-in-android",
        "excerpt": "Today I wanted to write logcat output to a file while my application is running. To do so I executed...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Extend SQLiteOpenHelper as a singleton class in Android ",
        "url": "https://manios.org/2012/05/17/extend-sqliteopenhelper-as-a-singleton-class-in-android",
        "excerpt": "Update: 2012-07-27 Today I wanted to keep my DatabaseHelper class unique and public in all my activities. Till now I...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SQL Server Truncate All Table Data",
        "url": "https://manios.org/2012/06/01/sql-server-truncate-all-table-data",
        "excerpt": "Today I want to truncate ( delete all table data) in a large SQL Server database instance. Plain delete statements...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SQL Server Select Table information",
        "url": "https://manios.org/2012/06/22/sql-server-select-table-information",
        "excerpt": "Today I am going to show you how do we obtain schema information in SQL Server 2005/2008. If you want...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "PowerBuilder 10 Get and Set System Language",
        "url": "https://manios.org/2012/08/07/powerbuilder-10-get-and-change-system-language",
        "excerpt": "Today I wanted to retrieve the selected system language from PowerBuilder 10. To accomplish that I had to do some...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Java get file size and download using HTTP",
        "url": "https://manios.org/2012/08/09/java-get-file-size-and-download-using-http",
        "excerpt": "Today I wanted to download a file using Http protocol but before that determine its size. First aff all I...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ubuntu Debian Linux useful commands",
        "url": "https://manios.org/2012/08/10/ubuntu-linux-useful-commands",
        "excerpt": "Updated: 2015-09-08 Change keyboard layout to support both English (US) and Greek (GR) setxkbmap -option grp:alt_shift_toggle us,gr Audjust monitor brightness...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Java Calculate Orthodox Easter Date",
        "url": "https://manios.org/2012/08/14/java-calculate-orthodox-easter-date",
        "excerpt": "Today I wondered if there is an algorithm to calculate the date of Orthodox Easter. After some searching in the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Perl UTF-8 and Regular Expressions",
        "url": "https://manios.org/2012/08/15/perl-utf-8-and-regular-expressions",
        "excerpt": "Today I wanted to explore Perl’s Unicode and regular expression capabilities, so I wrote down this simple script. It is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "PowerBuilder Datawindow Grid delete selected rows efficiently",
        "url": "https://manios.org/2012/08/24/powerbuilder-datawindow-grid-delete-selected-rows-efficiently",
        "excerpt": "Today I wanted to delete the selected rows of a datawindow grid in Powerbuilder. When I say delete I wanted...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Send email from VBScript using SMTP and Gmail",
        "url": "https://manios.org/2012/09/12/send-email-from-vbscript-using-smtp-and-gmail",
        "excerpt": "Today I wanted to send an email using SMTP from my gmail account. I searched the web and I found...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Windows 7 64bit ODBC Data sources",
        "url": "https://manios.org/2012/09/26/windows-7-64bit-odbc-data-sources",
        "excerpt": "Today I was trying to create and ODBC Data Source to a database using 32 bit database drivers. When I...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Java String Util Class",
        "url": "https://manios.org/2012/12/27/198",
        "excerpt": "Unfortunately, Java does not include a proper String manipulation class in its Java SE SDK. I really do not understand...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Java send smtp mail using Gmail",
        "url": "https://manios.org/2013/02/27/java-send-smtp-mail-using-gmail",
        "excerpt": "Today I wanted to make a mail notification mechanism for a project of mine. After some web searching I stumbled...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Change timezone to Apache server , PHP and MySql in XAMPP",
        "url": "https://manios.org/2013/03/05/change-timezone-to-apache-server-and-php",
        "excerpt": "I have installed XAMPP in my Windows machine and I want to alter the timezone in Apache HTTP server, PHP...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Install Raspbian Wheezy Linux to Raspberry Pi using Linux",
        "url": "https://manios.org/2013/03/10/install-raspbian-wheezy-linux-to-raspberry-pi-using-linux",
        "excerpt": "Επιτέλους! (at last! in greek) After a month and a half of waiting, I received my Raspberry Pi! Now I...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Import a large sql dump file to a MySQL database from command line",
        "url": "https://manios.org/2013/03/19/import-a-large-sql-dump-file-to-a-mysql-database-from-command-line",
        "excerpt": "Today I had to import a very large SQL dump file (6 Gb) to a MySQL database using windows command...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "MySQL connection ERROR 1129",
        "url": "https://manios.org/2013/04/19/mysql-connect-error-1129",
        "excerpt": "Today I had to configure a MySQL database cluster and I faced the following error ERROR 1129 (HY000): Host '192.168.1.12'...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Vi set color scheme , line numbers and syntax highlighting",
        "url": "https://manios.org/2013/04/23/vi-set-color-scheme-line-numbers-and-syntax-highlighting",
        "excerpt": "Today I wanted to to set the Color Scheme in vi / vim in my Linux. The default configuration looks...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fix Vmware tools \" kernel header path is not valid \" error",
        "url": "https://manios.org/2013/06/12/fix-vmware-tools-kernel-header-path-is-not-valid-error",
        "excerpt": "UPDATE (2015-05-13): Confirming that the following approach works for Lubuntu versions 12.10, 14.04 and 14.10 and Linux Mint 15 and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Linux mount Windows shared directory via cifs and samba",
        "url": "https://manios.org/2013/08/06/linux-mount-windows-shared-directory-via-cifs-and-samba",
        "excerpt": "Updates: 2013-08-08: Added sec=ntlm 2014-09-04: Added domain=mydomain parameter in order to connect to Active Directory domain Today I wanted to...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Linux get hard disk statistics using Python",
        "url": "https://manios.org/2013/08/13/linux-get-hard-disk-statistics-using-python",
        "excerpt": "Today I wanted to collect disk usage information and send them to a remote server script. I used df command...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Read SMS directly from Sqlite database in Android",
        "url": "https://manios.org/2013/10/28/read-sms-directly-from-sqlite-database-in-android",
        "excerpt": "Today I wanted to extract the SMS content out of the android SMS application SQLite database using ADB. NOTE: The...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Remove special and control characters from string using Python",
        "url": "https://manios.org/2013/12/31/remove-special-and-control-characters-from-string-using-python",
        "excerpt": "Today I had a database table which contained special and control characters (like DLE, DC1, ACK, DC3 etc.) in its...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Install Apache Solr as Windows Service using NSSM",
        "url": "https://manios.org/2014/02/15/install-apache-solr-as-windows-service-using-nssm",
        "excerpt": "Today I wanted to install Apache Solr index in Windows 7, Windows Server 2008R2 and Windows Server 2012 machines. So...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Export Untracked, modified, moved and deleted files from a Git repository to archive",
        "url": "https://manios.org/2014/04/12/export-untracked-modified-moved-and-deleted-files-from-a-git-repository-to-archive",
        "excerpt": "Today I wanted to export to a .tar.gz archive all unstracked (new) , modified and deleted files from a Git...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Nginx https reverse proxy to Wordpress with Apache, http and different port",
        "url": "https://manios.org/2014/04/12/nginx-https-reverse-proxy-to-wordpress-with-apache-http-and-different-port",
        "excerpt": "Today I had to hide a Wordpress 3.8.1 blog behind an Nginx reverse proxy configured to use only https. Nginx...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Linux: Extract audio and video using ffmpeg ",
        "url": "https://manios.org/2014/07/28/linux-extract-audio-and-video-using-ffmpeg",
        "excerpt": "Today I had some mp4 video files and I wanted to extract the audio and video into separate files. So...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Solr fix corrupted index using Lucene",
        "url": "https://manios.org/2014/11/01/solr-fix-corrupted-index-using-lucene",
        "excerpt": "A few days ago, a Solr server in our SolrCloud installation stopped unexpectedly. After examining solr.log file I spotted that...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "JSON remove new lines via Linux and use it as string variable and as param in cURL POST request",
        "url": "https://manios.org/2014/12/30/json-remove-new-lines-via-linux-and-use-it-as-string-variable-and-as-param-in-curl-post-request",
        "excerpt": "Today I had to parse a JSON response in a JUnit test and then reuse it in a cURL command...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Migrate a Gitlab Docker container from version 8.0.4 to 8.2.0",
        "url": "https://manios.org/2015/12/04/migrate-a-gitlab-docker-container-from-version-8-0-4-to-8-2-0",
        "excerpt": "Update 2016-05-13: The following procedure works perfectly for migrations from version 8.0.4 to 8.7.5 A few days ago, I had...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Let's Encrypt SSL certificate without root or sudo privileges",
        "url": "https://manios.org/2016/07/12/lets-encrypt-ssl-certificate-without-root-or-sudo-privileges",
        "excerpt": "Five days ago we had to renew a number of SSL certificates using free Let’s Encrypt SSL authority to a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Configure Eclipse in order to build MapStruct in Java projects",
        "url": "https://manios.org/2017/08/09/configure-eclipse-in-order-to-build-mapstruct-in-java-projects",
        "excerpt": "Today I was working on a Java Spring MVC project which uses Maven. My editor was the Eclipse IDE, with...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SublimeText 3 Fix greek (and other languages) accented chars input",
        "url": "https://manios.org/2017/10/17/sublime-3-fix-greek-accented-characters",
        "excerpt": "Yesterday I installed SublimeText 3 editor (build 3143) in my PC and the first thing I realised was that I...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Use HAProxy and Docker to load balance requests to Solr and SolrCloud",
        "url": "https://manios.org/2017/11/15/use-haproxy-and-docker-for-solr-load-balancing",
        "excerpt": "We use Solr 4.6 with SolrCloud configuration in a production system. You may say: “It is hight time you upgraded...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "MongoDB replica error RS102 too stale to catch up during full recovery",
        "url": "https://manios.org/2017/11/23/mongodb-replica-stale-during-recovery",
        "excerpt": "We run MongoDB 2.6.0 on a production system configured with a replica set of 3 members: Primary Secondary Arbiter About...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Install, configure and troubleshoot NTP servers in Debian Linux",
        "url": "https://manios.org/2017/12/14/install-and-configure-and-troubleshoot-ntp-servers-in-debian-linux",
        "excerpt": "If you are reading this article, perhaps you have searched a lot about NTP server installation in Linux, issues and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "HTTP Basic Authentication in Java SOAP JAX-WS web service client",
        "url": "https://manios.org/2018/03/30/java-soap-jax-ws-client-basic-auth",
        "excerpt": "Today I had to create a Java client for a SOAP web service. So I opened Netbeans IDE and used...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Debug HTTP request of Java SOAP JAX-WS web service client",
        "url": "https://manios.org/2018/04/03/java-soap-service-client-debug-http-message",
        "excerpt": "Today I wanted to debug in Java a JAX-WS SOAP web service client and see the exact message that is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Git merge conflicts using Tortoise Git merge in Windows",
        "url": "https://manios.org/2018/05/30/git-merge-conflicts-using-tortoise-git-merge-windows",
        "excerpt": "Today we wanted to use Tortoise Git Merge, a Windows Git utility which comes with Tortoise Git. It helps us...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Creating a Beat based on Metricbeat resolving Init and create metricset failures",
        "url": "https://manios.org/2018/07/23/create-a-beat-based-on-metricbeat-resolving-bugs",
        "excerpt": "I suspect that you are reading this post after having trouble creating a new Elastic Beat based on Metricbeat. Bud...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
