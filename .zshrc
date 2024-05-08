# CodeWhisperer pre block. Keep at the top of this file.
#[[ -f "${HOME}/Library/Application Support/codewhisperer/shell/zshrc.pre.zsh" ]] && builtin source "${HOME}/Library/Application Support/codewhisperer/shell/zshrc.pre.zsh"
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# Caution: this setting can cause issues with multiline prompts (zsh 5.7.1 and newer seem to work)
# See https://github.com/ohmyzsh/ohmyzsh/issues/5765
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(zsh-autosuggestions jump zsh-syntax-highlighting)


source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
DEVDESK="dev-dsk-tomtwang-2a-4d6816b1.us-west-2.amazon.com"
ARMDESK="dev-dsk-tomtwang-2a-d53dfcb3.us-west-2.amazon.com"
alias jpeftunnel='ssh -N -L 9001:localhost:80 $JPDEVDESK'
DRAMDEVDESK="sxa-development-tomtwang-1e-512b800a.us-east-1.amazon.com"
alias sshdevdesk='ssh $DEVDESK'
alias ssharmdesk='ssh $ARMDESK'
alias efstunnel='ssh -N -L 9000:localhost:80 $DEVDESK'
#alias unison-start='unison -ui text'

unisonstart() {
  rm /Users/tomtwang/.unison/lk831cd9073b31656e2490add2d654be4f;
  ssh tomtwang@$DEVDESK rm /home/tomtwang/.unison/lkca55428506604253d2c9fb886cd77aa2;
  unison -ui text
}

alias syncserviceall='rsync -r -P --exclude '.git' --rsh=ssh tomtwang@$DEVDESK:/workplace/tomtwang/EdgeFlowService/src /Volumes/brazil-ws/workspaces/EdgeFlowService'
alias scp_to_arm='scp -r nvim tomtwang@dev-dsk-tomtwang-2a-d53dfcb3.us-west-2.amazon.com:~/.config/'
alias scp_to_x86='scp -r nvim $DEVDESK:~/.config/'


alias meld="/Applications/Meld.app/Contents/MacOS/Meld"
alias removeRustToolchains="find . -name 'rust-toolchain.toml' -delete"
alias removeCargoLock="find . -name 'Cargo.lock' -delete"
alias gitsetupstream='git branch --set-upstream-to origin/mainline'
alias jplinit='/Volumes/workplace/workspaces/LoginScript/main.sh'
fetchCR() {
	git branch -D testing;git checkout -b testing;git pull $1 head
}
function dockerremoveimage() {docker rmi $(docker images | grep '$1')}

alias bb=brazil-build
alias bba='brazil-build apollo-pkg'
alias bball='brc --allPackages'
alias bbb='brc --allPackages brazil-build'
alias bbr='brc brazil-build'
alias bbra='bbr apollo-pkg'
alias brc=brazil-recursive-cmd
alias bre=brazil-runtime-exec
alias bws='brazil ws'
alias bwscreate='bws create -n'
alias bwsuse='bws use --gitMode -p'

export PATH=$HOME/bin:$HOME/.toolbox/bin:$PATH
export FZF_DEFAULT_COMMAND="fd . ~/workplace"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd -t d . ~/workplace"
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

alias xbrew='arch -x86_64 /usr/local/homebrew/bin/brew'
alias xtmux='arch -x86_64 /usr/local/homebrew/opt/tmux/bin/tmux -CC attach'
alias missionlog='pipenv run /Volumes/brazil-ws/workspaces/SlackBackupPython/slack_backup.py'
source "$HOME/.cargo/env"

eval "$(starship init zsh)"

export EDA_AUTO="$HOME/.config/eda/completion"
mkdir -p $EDA_AUTO
eda completions zsh > $EDA_AUTO/_eda
fpath=($EDA_AUTO $fpath)
autoload -Uz compinit
compinit

export PATH="$PATH:/Users/tomtwang/.local/bin:/usr/local/go/bin"


export NVM_DIR=~/.nvm
. $(brew --prefix nvm)/nvm.sh
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion


export JAVA_TOOLS_OPTIONS="-Dlog4j2.formatMsgNoLookups=true"
export PATH="$HOME/.cargo/bin:$PATH"
export LIBGIT2_SYS_USE_PKG_CONFIG=1
export LIBSSH2_SYS_USE_PKG_CONFIG=1

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completionalias vim='nvim'
alias vim='nvim'
source /Users/tomtwang/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
alias houstonCargoBuild='OPENSSL_LIB_DIR=/Volumes/brazil-pkg-cache/packages/Openssl/Openssl-1.0.x.463450.0/AL2_x86_64/DEV.STD.PTHREAD/build/lib OPENSSL_INCLUDE_DIR=/Volumes/brazil-pkg-cache/packages/Openssl/Openssl-1.0.x.463450.0/AL2_x86_64/DEV.STD.PTHREAD/build/include OPENSSL_STATIC=1 RUSTFLAGS="--cfg tokio_unstable" cargo build'
alias houstonCargoRun='OPENSSL_LIB_DIR=/Volumes/brazil-pkg-cache/packages/Openssl/Openssl-1.0.x.463450.0/AL2_x86_64/DEV.STD.PTHREAD/build/lib OPENSSL_INCLUDE_DIR=/Volumes/brazil-pkg-cache/packages/Openssl/Openssl-1.0.x.463450.0/AL2_x86_64/DEV.STD.PTHREAD/build/include OPENSSL_STATIC=1 RUSTFLAGS="--cfg tokio_unstable" cargo run'
export PATH="/opt/homebrew/opt/curl/bin:$PATH"

PATH_DIR="$HOME/bin"  # or another directory on your $PATH
mkdir -p "$PATH_DIR"
curl https://cht.sh/:cht.sh > "$PATH_DIR/cht.sh"
chmod +x "$PATH_DIR/cht.sh"

export EDITOR=nvim
export VISUAL="$EDITOR"
fpath=(~/.zsh.d/ $fpath)
export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
source /Users/tomtwang/.brazil_completion/zsh_completion

export PATH="/usr/local/bin:$PATH"
# eval "$(/usr/local/bin/brew shellenv)"

# CodeWhisperer post block. Keep at the bottom of this file.
[[ -f "${HOME}/Library/Application Support/codewhisperer/shell/zshrc.post.zsh" ]] && builtin source "${HOME}/Library/Application Support/codewhisperer/shell/zshrc.post.zsh"
eval "$(/opt/homebrew/bin/brew shellenv)"
export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
