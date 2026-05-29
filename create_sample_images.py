#!/usr/bin/env python3
"""
创建示例图片用于演示PDF转换功能
"""

from PIL import Image, ImageDraw, ImageFont
import os


def create_sample_image(text, color, filename):
    """创建一张示例图片"""
    # 创建一个图片
    width, height = 800, 600
    img = Image.new('RGB', (width, height), color=color)
    draw = ImageDraw.Draw(img)
    
    # 绘制边框
    draw.rectangle([20, 20, width-20, height-20], outline='white', width=5)
    
    # 添加文字
    try:
        # 尝试使用系统字体
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 60)
    except:
        # 如果找不到字体，使用默认字体
        font = ImageFont.load_default()
    
    text_width = draw.textlength(text, font=font) if hasattr(draw, 'textlength') else 300
    text_x = (width - text_width) / 2
    text_y = height / 2 - 30
    
    draw.text((text_x, text_y), text, fill='white', font=font)
    
    # 添加小文字
    small_text = f"示例图片 - {filename}"
    try:
        small_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 24)
    except:
        small_font = ImageFont.load_default()
    
    small_width = draw.textlength(small_text, font=small_font) if hasattr(draw, 'textlength') else 200
    draw.text(((width - small_width)/2, height - 80), small_text, fill='white', font=small_font)
    
    # 保存图片
    img.save(filename)
    print(f"已创建: {filename}")


def main():
    print("正在创建示例图片...\n")
    
    # 创建4张示例图片
    create_sample_image("第 1 页", (70, 130, 180), "photo_1_2026-05-29_21-42-00.jpg")
    create_sample_image("第 2 页", (45, 120, 100), "photo_2_2026-05-29_21-42-00.jpg")
    create_sample_image("第 3 页", (180, 100, 80), "photo_3_2026-05-29_21-42-00.jpg")
    create_sample_image("第 4 页", (120, 80, 140), "photo_4_2026-05-29_21-42-00.jpg")
    
    print("\n✅ 4张示例图片创建完成！")
    print("现在可以运行 convert_images_to_pdf.py 将它们转换为PDF了。")


if __name__ == "__main__":
    main()
