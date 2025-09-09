#!/bin/bash

# PNG to WebP Conversion Script
# This script converts PNG images to WebP format with optimized compression
# Usage: ./convert_png_to_webp.sh [input_directory] [output_directory]

# Set default directories
INPUT_DIR="${1:-public}"
OUTPUT_DIR="${2:-public}"
QUALITY=80
METHOD=6

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Converting PNG files from '$INPUT_DIR' to WebP format..."
echo "Output directory: '$OUTPUT_DIR'"
echo "Quality: $QUALITY, Compression method: $METHOD"
echo "----------------------------------------"

# Counter for processed files
count=0
total_original_size=0
total_optimized_size=0

# Function to convert a single PNG file
convert_png() {
    local input_file="$1"
    local filename=$(basename "$input_file" .png)
    local output_file="$OUTPUT_DIR/${filename}.webp"
    
    echo "Converting: $input_file -> $output_file"
    
    # Convert PNG to WebP with high-quality compression
    magick "$input_file" -quality $QUALITY -define webp:method=$METHOD "$output_file"
    
    if [ $? -eq 0 ]; then
        # Calculate sizes
        original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null || echo 0)
        optimized_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null || echo 0)
        
        # Calculate reduction percentage
        if [ $original_size -gt 0 ]; then
            reduction=$(echo "scale=1; (1 - $optimized_size / $original_size) * 100" | bc -l 2>/dev/null || echo "0")
            echo "  Size: $(numfmt --to=iec $original_size) -> $(numfmt --to=iec $optimized_size) (${reduction}% reduction)"
        fi
        
        total_original_size=$((total_original_size + original_size))
        total_optimized_size=$((total_optimized_size + optimized_size))
        count=$((count + 1))
    else
        echo "  ERROR: Failed to convert $input_file"
    fi
    echo ""
}

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Install it with: brew install imagemagick"
    exit 1
fi

# Process all PNG files in the input directory
png_files=("$INPUT_DIR"/*.png)
if [ ! -f "${png_files[0]}" ]; then
    echo "No PNG files found in '$INPUT_DIR'"
    exit 1
fi

for png_file in "${png_files[@]}"; do
    if [ -f "$png_file" ]; then
        convert_png "$png_file"
    fi
done

# Summary
echo "========================================="
echo "Conversion complete!"
echo "Files processed: $count"
if [ $total_original_size -gt 0 ]; then
    total_reduction=$(echo "scale=1; (1 - $total_optimized_size / $total_original_size) * 100" | bc -l 2>/dev/null || echo "0")
    echo "Total original size: $(numfmt --to=iec $total_original_size)"
    echo "Total optimized size: $(numfmt --to=iec $total_optimized_size)"
    echo "Total size reduction: ${total_reduction}%"
fi
echo "========================================="
