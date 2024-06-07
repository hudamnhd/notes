### vim regex
```
- (.*)                     -- find all word
- ^                        -- start of line
- \r                       -- add new line
- $                        -- end of line
- %s                       -- subtitute (find and replace)
- \v                       -- very magic
- (abc|cba)                -- match either abc or cba
- :%s/\v(abc|cba)//g       -- find and remove abc and cba
- :s/\(.*\)/abc \1 abc     -- add abc first and last word, using visual mode
- :s/<\(.*\)/{\/*\<\1 *\/} -- find < and add {*/ *\} before and after
- :4,9s/^/#/               -- add # at first line 4-9
- g/<Lua.*> /d             -- find <Luax>
- g/ \vn s.*/m0            -- find n sxx and move to top m$ ( to bottom )
```

### Search and Replace
```
- %s/\\n/\r/g
- :cdo \ cfdo for all buffer
```

### Subtitute
```
:'<,'>s/\v(\w+),/\1={\1}/g            -- clone text ex. test to test={test}
:s/^//gI<Left><Left><Left>            -- add begin line only
:s/$//gI<Left><Left><Left>            -- add end only
:s/\(.*\)/X \1 X/gI<Left><Left><Left> -- add word begin and end line
:s/\s\+/ /g<Left><Left>               -- delete space
:s/"\([^"]*\)"/""/g<Left><Left><Left> -- change word in quotes
:s/"\([^"]*\)"/(\1)/g<Left><Left>     -- add word after ()
```

### Sort
```
:%!sort -k 1
:%!sort -k 2
```
> k = kolom

### Save output map
```
:redir! > vim_keys.txt
:silent map
:redir END
```
