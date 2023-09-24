import pytube

# Enter video URL
v_url = input('Enter the URL: ')

# create an instance of pytube video
v_instance = pytube.YouTube(v_url)
stream = v_instance.streams.get_highest_resolution()

# download
stream.download()