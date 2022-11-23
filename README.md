# Clean Up! (After Effects JSX)

  - Bad at keeping your project panel in after effects clean?
  - Have files leaking everywhere?
  - Can't find important footage in the sea of unorganized footage?

This repository is dedicated to developing an After Effects Script
  - This script reorganizes your project panel with just a single click

Below is an example of usability:

![CleanUpDemo](https://user-images.githubusercontent.com/118658527/203237615-96aa0af5-778c-42cd-a0fd-91c6c2f4bcc5.gif)

I've kept the files open, granting the ability to read the code for both the bat and jsx file
The purpose is to guarantee no virus or malicious attack is implemented into any file

## The batch will ask for administer permission to copy from the folder directory to the following:
  - %ProgramFiles%\Adobe\Adobe After Effects 2020\Support Files\Scripts
  - %ProgramFiles%\Adobe\Adobe After Effects 2021\Support Files\Scripts
  - %ProgramFiles%\Adobe\Adobe After Effects 2022\Support Files\Scripts
  - %ProgramFiles%\Adobe\Adobe After Effects 2023\Support Files\Scripts

___

## Problem & Fixes (Troubleshooting)

* P: "The system cannot find the path specified."  
F: Since the batch file is set to copy to the directories listed above, there are two possible reasons for this:
	
  > 1. The After Effects version installed is not yet implemented into the batch script
    > Can simply be fixed by opening the batch and changing one directory to your supported year
  > 2. The directory of your After Effects is not installed into your Program Files location, rather somewhere else

* P: How do I install it without the use of auto-install.bat  
F: You can copy and paste the script into the script folder inside of your After Effects Directory.
	
  > Adobe\Adobe After Effects [YEAR]\Support Files\Scripts

* P: The auto-install.bat isn't working  
F: The reason for this is due to the auto-install.bat not being inside of the same directory as the CleanUp!.jsx file

___

If you have any questions or want to get in contact with me, below are my credentials

Discord
> s2k#9491

Gmail  
> s2kdevelopshare@gmail.com
