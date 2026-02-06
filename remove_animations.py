#!/usr/bin/env python3
import re
import sys

def remove_animation_props(content):
    """Remove animation-related props from JSX elements"""
    
    # Remove common animation props (single line)
    patterns = [
        r'\s+initial="[^"]*"',
        r'\s+initial=\{[^}]*\}',
        r'\s+animate="[^"]*"',
        r'\s+animate=\{[^}]*\}',
        r'\s+variants=\{[^}]*\}',
        r'\s+whileInView=\{[^}]*\}',
        r'\s+whileHover=\{[^}]*\}',
        r'\s+whileTap=\{[^}]*\}',
        r'\s+viewport=\{[^}]*\}',
        r'\s+transition=\{[^}]*\}',
        r'\s+exit=\{[^}]*\}',
        r'\s+style=\{\s*{\s*y:\s*heroY.*?\}\s*\}',
        r'\s+style=\{\s*{\s*opacity:\s*heroOpacity.*?\}\s*\}',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content)
    
    # Remove empty className props that might be left
    content = re.sub(r'\s+className=""', '', content)
    
    return content

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 remove_animations.py <file>")
        sys.exit(1)
    
    filename = sys.argv[1]
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        cleaned_content = remove_animation_props(content)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Cleaned: {filename}")
    except Exception as e:
        print(f"✗ Error processing {filename}: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
