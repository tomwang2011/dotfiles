if status is-interactive
    # Commands to run in interactive sessions can go here
end
starship init fish | source

abbr --add vim 'nvim'
set DEVDESK "dev-dsk-tomtwang-2a-4d6816b1.us-west-2.amazon.com"
set ARMDESK "dev-dsk-tomtwang-2a-d53dfcb3.us-west-2.amazon.com"
abbr --add sshdevdesk 'ssh $DEVDESK'
alias ssharmdesk='ssh $ARMDESK'
