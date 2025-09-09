#!/bin/bash


# Function to optimize a single video
optimize_video() {
    local input="$1"
    local filename=$(basename "$input")
    local name_no_ext="${filename%.*}"
    local output="public/video_optimized/${name_no_ext}.mp4"
    
    echo "Optimizing: $input -> $output"
    
    # Optimize with good web settings:
    # - H.264 codec for broad compatibility
    # - CRF 23 for good quality/size balance
    # - Scale down if larger than 1080p
    # - Optimize for web streaming
    ffmpeg -i "$input" \
        -c:v libx264 \
        -preset medium \
        -crf 23 \
        -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y "$output"
    
    # Show size comparison
    original_size=$(du -h "$input" | cut -f1)
    optimized_size=$(du -h "$output" | cut -f1)
    echo "Size: $original_size -> $optimized_size"
    echo "---"
}

# Process all mp4 and MP4 files
for video in public/*.mp4 public/*.MP4; do
    if [ -f "$video" ]; then
        optimize_video "$video"
    fi
done

echo "Video optimization complete!"
echo "Original videos: $(du -sh public/*.mp4 public/*.MP4 2>/dev/null | awk '{total+=$1}END{print total"M"}' || echo "0M")"
echo "Optimized videos: $(du -sh public/video_optimized/* 2>/dev/null | awk '{total+=$1}END{print total"M"}' || echo "0M")"
