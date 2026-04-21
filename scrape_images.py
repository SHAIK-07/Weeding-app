import os
import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import urljoin, urlparse

def download_image(url, folder):
    try:
        if not url.startswith('http'):
            return
        
        response = requests.get(url, stream=True, timeout=10)
        if response.status_code == 200:
            # Get filename from URL
            parsed_url = urlparse(url)
            filename = os.path.basename(parsed_url.path)
            if not filename or '.' not in filename:
                # Handle cases without clear filename
                content_type = response.headers.get('content-type', '')
                ext = '.jpg'
                if 'png' in content_type: ext = '.png'
                elif 'svg' in content_type: ext = '.svg'
                elif 'webp' in content_type: ext = '.webp'
                filename = f"image_{hash(url)}{ext}"
            
            filepath = os.path.join(folder, filename)
            
            # Prevent overwriting with generic names
            if os.path.exists(filepath):
                filename = f"{os.path.splitext(filename)[0]}_{hash(url)}{os.path.splitext(filename)[1]}"
                filepath = os.path.join(folder, filename)

            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Downloaded: {filename}")
            return filename
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return None

def main():
    url = "https://crafto.themezaa.com/wedding-invitation/"
    output_folder = "public/images"
    
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    print(f"Fetching {url}...")
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    image_urls = set()
    
    # 1. Image tags
    for img in soup.find_all('img'):
        src = img.get('src')
        if src:
            image_urls.add(urljoin(url, src))
        data_src = img.get('data-src')
        if data_src:
            image_urls.add(urljoin(url, data_src))
        srcset = img.get('srcset')
        if srcset:
            for part in srcset.split(','):
                s = part.strip().split(' ')[0]
                if s:
                    image_urls.add(urljoin(url, s))

    # 2. Background images in style attributes
    style_tags = soup.find_all(style=True)
    for tag in style_tags:
        style = tag['style']
        bg_urls = re.findall(r'url\((.*?)\)', style)
        for bg_url in bg_urls:
            bg_url = bg_url.strip("'\"")
            image_urls.add(urljoin(url, bg_url))

    # 3. Background images in CSS (if inline)
    for css in soup.find_all('style'):
        bg_urls = re.findall(r'url\((.*?)\)', css.string if css.string else "")
        for bg_url in bg_urls:
            bg_url = bg_url.strip("'\"")
            image_urls.add(urljoin(url, bg_url))

    print(f"Found {len(image_urls)} potential images. Starting download...")
    
    downloaded_count = 0
    for img_url in image_urls:
        filename_part = os.path.basename(urlparse(img_url).path).lower()
        # Only download images that are clearly part of the wedding invitation demo
        if "demo-wedding" in filename_part:
            if any(ext in filename_part for ext in ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif']):
                if download_image(img_url, output_folder):
                    downloaded_count += 1
    
    print(f"Done! Downloaded {downloaded_count} images to {output_folder}")

if __name__ == "__main__":
    main()
