class FileArrayLoader
    def self.load_words(word_type)
        file = File.read(word_type + 's.txt').split
    end
end
