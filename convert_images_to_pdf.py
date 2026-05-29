#!/usr/bin/env python3
"""
图片转PDF工具
将指定的图片文件转换为PDF文件
"""

import os
import sys
from PIL import Image
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas


def images_to_pdf(image_paths, output_pdf_path):
    """
    将多个图片转换为一个PDF文件
    
    Args:
        image_paths: 图片文件路径列表
        output_pdf_path: 输出PDF文件路径
    """
    print(f"开始处理 {len(image_paths)} 张图片...")
    
    # 创建PDF文档
    c = canvas.Canvas(output_pdf_path, pagesize=A4)
    page_width, page_height = A4
    
    # 边距设置
    margin = 0.5 * inch
    available_width = page_width - 2 * margin
    available_height = page_height - 2 * margin
    
    for i, img_path in enumerate(image_paths, 1):
        if not os.path.exists(img_path):
            print(f"警告: 文件 {img_path} 不存在，跳过")
            continue
            
        try:
            # 打开图片
            with Image.open(img_path) as img:
                # 获取原始尺寸
                img_width, img_height = img.size
                
                # 计算缩放比例，让图片适应页面
                scale = min(available_width / img_width, available_height / img_height)
                scaled_width = img_width * scale
                scaled_height = img_height * scale
                
                # 计算居中位置
                x = margin + (available_width - scaled_width) / 2
                y = margin + (available_height - scaled_height) / 2
                
                # 添加图片到PDF
                c.drawImage(img_path, x, y, width=scaled_width, height=scaled_height, 
                            preserveAspectRatio=True, anchor='c')
                
                # 添加页码
                c.setFont("Helvetica", 10)
                c.drawString(page_width / 2 - 10, 0.3 * inch, str(i))
                
                # 添加新页面（除了最后一页）
                if i < len(image_paths):
                    c.showPage()
                    
            print(f"已处理第 {i} 张图片: {os.path.basename(img_path)}")
            
        except Exception as e:
            print(f"处理图片 {img_path} 时出错: {e}")
    
    # 保存PDF
    c.save()
    print(f"\nPDF文件已成功生成: {output_pdf_path}")
    return True


def main():
    # 默认图片文件名（您可以修改这些文件名）
    default_images = [
        "photo_1_2026-05-29_21-42-00.jpg",
        "photo_2_2026-05-29_21-42-00.jpg", 
        "photo_3_2026-05-29_21-42-00.jpg",
        "photo_4_2026-05-29_21-42-00.jpg"
    ]
    
    # 检查当前目录中的图片文件
    print("正在查找图片文件...")
    image_files = []
    
    # 检查默认文件是否存在
    for img_file in default_images:
        if os.path.exists(img_file):
            image_files.append(img_file)
    
    # 如果没有找到默认图片，查找所有图片文件
    if not image_files:
        print("未找到默认图片文件，正在查找所有图片...")
        for file in os.listdir('.'):
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff')):
                image_files.append(file)
    
    if not image_files:
        print("错误: 未找到任何图片文件！")
        print("请确保图片文件在当前目录中，或修改脚本中的图片路径。")
        return
    
    print(f"找到 {len(image_files)} 张图片:")
    for i, img in enumerate(image_files, 1):
        print(f"  {i}. {img}")
    
    # 确定输出路径（保存到桌面）
    desktop_path = os.path.expanduser("~/Desktop")
    if not os.path.exists(desktop_path):
        desktop_path = "."  # 如果桌面不存在，保存到当前目录
        
    output_pdf = os.path.join(desktop_path, "images_to_pdf.pdf")
    
    # 转换图片为PDF
    images_to_pdf(image_files, output_pdf)


if __name__ == "__main__":
    main()
